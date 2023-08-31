const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const height = canvas.height;
const width = canvas.width;

//arrow function: method oluşturma yöntemi
const oyunuCiz = () => {
    tahtayiTemizle();

    ctx.beginPath();
        ctx.arc(width/2, height-30, 10,0,Math.PI*2);
        ctx.fillStyle = "#0095DD"
        ctx.fill();
    ctx.closePath();
}

const tahtayiTemizle = () =>{
    ctx.clearRect(0,0, width,height); //Önce tabloyu sıfırlıyoruz. 
}

oyunuCiz();