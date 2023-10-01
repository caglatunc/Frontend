get();

function get(){

    document.getElementById("blog").style.display ="none";
    document.getElementById("spinner").style.display = "flex";

    setTimeout(()=> {
    axios.get("http://localhost:5000/api/get")
    .then(res=> {
        const myData = res.data;
        setMyInformation(myData.person);
        setMySkills(myData.skills);
        setMyLanguages(myData.languages);
        setMyExperiences(myData.experiences);
        setMyEducations(myData.educations);
        setMyInterests(myData.interests);


        document.getElementById("blog").style.display ="block";
        document.getElementById("spinner").style.display = "none";
    })
    
        },4000)

 





   
}

function setMyInformation(person){
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
    }

//skilleri function ile yakalıyor.
function setMySkills(skills ){
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
    }
    
function setMyLanguages(languages){
    let text = "";
    for(let language of languages){
        text += `
        <li>
            <span class="text">
            ${language.title}</span>
            <span class="percent"><div style="width:${language.percent}%; background-color:rgb(164, 179, 187)"></div>
            </span>
        </li>
        `
    }
    document.getElementById("languages").innerHTML= text;
}

 function setMyExperiences(experiences){
    let text = `<h2 class="title2" >Experience</h2>`;
     for(let experience of experiences){
          text +=
         `
         <div class="box">
         <div class="year_company">
             <h5>${experience.date}</h5>
             <h5>${experience.subtitle}</h5>
        </div>
         <div class="text">
              <h4>${experience.title}</h4>
            <P> ${experience.description}</P>
         </div>
         </div>`
     }
      document.getElementById("experiences").innerHTML=text;
 }

 
 function setMyEducations(educations){
   let text = `<h2 class="title2">Education</h2>`
   for(let ed of educations){
        text += `  
        <li>
            <div class="year_company">
                <h5>${ed.date}</h5>
                <h5>${ed.subtitle}</h5>
            </div>
            <div class="text">
                <h4>${ed.title}</h4>
                <P>${ed.description}</P>
            </div>
        </li>`
   }
        document.getElementById("educations").innerHTML = text;
 }

 function setMyInterests(interests){
    let text = `<h2 class="title2">Interest</h2>`
    for(let interest of interests) {
        text += `
        <li>
        <i class="${interest.icon}" > </i>
        ${interest.title}
        </li>
        `
    }
    document.getElementById("interests").innerHTML=text;
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

