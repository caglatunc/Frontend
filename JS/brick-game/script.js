const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let interval;
const height = canvas.height;
const width = canvas.width;
const x = width/2;
const y = height-30;
//arrow function: method oluşturma yöntemi
const oyunuCiz = () => {
    tahtayiTemizle();
    topuCiz();

}

const tahtayiTemizle = () =>{
    ctx.clearRect(0,0, width,height); //Önce tabloyu sıfırlıyoruz. 
}

const topuCiz = () =>{
    ctx.beginPath();
    ctx.arc(x, y, 10,0,Math.PI*2); //Şeklini belirtiyorum
    ctx.fillStyle = "#0095DD" // rengini belirtiyorum
    ctx.fill(); // fill ile birlikte şeklini ve rengini uygulatıyorum.
    ctx.closePath();
}

interval =setInterval(oyunuCiz,10);