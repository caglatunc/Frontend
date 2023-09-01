const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let interval;
const height = canvas.height;
const width = canvas.width;
let x = width/2;
let y = height-30;
let dx =  2; //sağa doğru +2 birim
let dy = -2; //yukarı
//arrow function: method oluşturma yöntemi
const oyunuCiz = () => {
    tahtayiTemizle();
    topuCiz();
    if(x+dx>width-10 || x+dx < 10) {
        dx=-dx
    }
    
    if(y+dy >height-10 || y+dy<10){
        dy=-dy;
    }

    x += dx;
    y += dy; 

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