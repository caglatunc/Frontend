//express.js => api isteklerini yazabilmemi sağlayan bir js kütüphanesi

const express = require("express");
const cors = require("cors"); //Cors politikası
const app = express();

app.use(express.json());//json formatı kullandığımızı belirtiyoruz
app.use(cors());//Cors politikası

const todos =[];

let id = 0;



app.get("/api/hello",(req,res)=>{
    res.json({message:"Api call is successful"})
})

//Örnek Api İsteği
// app.get("/api/todos/1", (req,res)=>{ 
//     res.json({
//         userId:1,
//         id:1,
//         title: "Deneme",
//         completed: false
//     })
// })


// Get isteği ile değer gönderebiliyoruz- Kayıt İşlemi
// app.get("/api/todos/create/:value", (req,res) =>{ 
//     const value = req.params.value; //Değer yakalıyorum.

//     id++;
//     const data = { //Objeye çeviriyorum.
//         id:id,
//         title:value,
//         isCompleted:false,
//         date: new Date()
//     }
    
//     todos.push(data); //Liste içerisine set ediyorum.
//     res.json({message:"Create is successfull"})
// })

//Kayıt İşlemi
app.post("/api/todos/create",(req,res)=>{
    const body = req.body; //body'de Obje var. { key:value}
    id++;
    const data ={
        id:id,
        title: body.title, //parametreden bana obje olarak bir değer gelsin, obje içerindeki title'ı yakalıyım.
        isCompleted:false,
        date: new Date()
    }

    todos.push(data);
    res.json({message:"Create is successfull"})

})

// Get isteği ile Listeleme İşlemi
app.get("/api/todos",(req,res)=>{
    res.json(todos);
})

//Silme İsteği
 app.get("/api/todos/remove/:id",(req,res)=>{
     const id = req.params.id;

    const index = todos.findIndex(p=> p.id === +id);//  p.id === +id +id numeratik okuması için +verdik.
   if(index === -1) res.status(500).json({message:"There is no matching record!"});
    else{
        todos.splice(index,1);
        res.json({message:"Removed is successfull"})
     }
 });

 //Güncelleme işlemi
 app.post("/api/todos/update",(req,res)=>{
    const body = req.body;
    const index= todos.findIndex(p=> p.id === +body.id);//mevcut kaydı bulalım
    if(index === -1) res.status(500).json({message:"This record you want to update was no found!"});
    else{
        todos[index].title = body.title;
        res.json({message:"Updated is successfull"});
    }
 })



app.listen(5000,()=> console.log(" My webapi is running"))//hangi portta çalışacağını