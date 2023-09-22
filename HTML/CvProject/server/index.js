const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());


const person = {
    name:"Çağla Tunç Savaş",
    title:"Software Developer",
    phone:"+90 500 000 00 00",
    email:"cagla@gmail.com",
    website:"www.cagla.com",
    socialMedia: "www.linkedin.com/me",
    address:"İstanbul / Turkey",
    avatar:"img.jpg",
    aboutMe:` 
    <div class="show-more-module--container--2QPRN"><span id="u146-show-more--1" data-type="checkbox" data-checked="checked" style="display:none"></span><div class="show-more-module--content--cjTh0 show-more-module--with-gradient--1ZDrA" style="max-height:32rem"><div tabindex="0"><div data-purpose="instructor-description"><p>Hello! I'm <strong>Çağla Tunç Savaş</strong>.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit magnam nisi dolores repellendus
    corporis distinctio cupiditate, saepe eius</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit magnam nisi dolores repellendus
    corporis distinctio cupiditate, saepe eius<strong>Udemy </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit magnam nisi dolores repellendus
    corporis distinctio pcupiditate, saepe eius.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit magnam nisi dolores repellendus
    corporis distinctio cupiditate, saepe eius</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit magnam nisi dolores repellendus
    corporis distinctio cupiditate, saepe eius</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit magnam nisi dolores repellendus
    corporis distinctio cupiditate, saepe eius</p></div></div></div></div>
    `
}

let skills =[
    {
        title:"C#",
        percent:80
    },
    {
        title:"HTML",
        percent:100
    },
    {
        title:"JS",
        percent:30
    }
]

//kontrol amaçlı api isteği
app.get("", (req, res) =>{
    res.json({message:"Api çalışıyor."})
})

app.get("/api/getMyInformation", (req,res)=> {
    res.json(person);
})

//Yeteneklerimi karşı tarafa gönderebiliyorum.
app.get("/api/getMySkills", (req,res)=> {
    res.json(skills);
})



app.listen(5000, ()=> console.log("Uygulama http://localhost:5000 üzerinden ayakta")); //uygulamayı çalıştığım zaman bu porttan ayağa kalkıyor