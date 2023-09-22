getMyInformation();

function getMyInformation(){
    axios.get("http://localhost:5000/api/getMyInformation")
    .then(res=>{
        const person = res.data;
        document.getElementById("name").innerText=person.name;
        document.getElementById("title").innerText=person.title;
        document.getElementById("avatar").src=person.avatar;
        document.getElementById("phone").innerText=person.phone;
        document.getElementById("email").innerText=person.email;
        document.getElementById("website").innerText=person.website;
        document.getElementById("socialMedia").innerText=person.socialMedia;
        document.getElementById("address").innerText=person.address;
        document.getElementById("aboutMe").innerHTML=person.aboutMe;
        console.log(person);
    });

getMySkills();
}

//skilleri function ile yakalıyor.
function getMySkills(){
    axios.get("http://localhost:5000/api/getMySkills")
    .then(res=> {
        const skills = res.data;
        let text = "";
        for(let skill of skills){
            text += `
            <li>
                <span class="percent">
                <p>${skill.title} </p>
                    <div style="width: ${skill.percent}%; background-color:rgb(164, 179, 187)"></div>
                </span>
            </li>
            `
        }
        document.getElementById("skills").innerHTML= text;
    })
    
}




// let skillElementId = 1;
// function addSkill(){
//     skillElementId++;
//     const value = `<li id="liSkill-${skillElementId}">
//     <span class="text">HTML
//     <button onclick="removeSkill('liSkill-${skillElementId}')">-</button>
//     </span>
//     <span class="percent">
//     <div style="width: 90%;"></div>
//     </span>
//     </li>`

//     document.getElementById("skills").innerHTML += value;
// }

// function removeSkill(id){ //Hangi elementi sileceksem onun id'sini ister.
//     document.getElementById(id).remove();
// }