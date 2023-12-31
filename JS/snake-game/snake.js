const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

document.addEventListener("keydown", tusHareketleri)

let canvasHeight = canvas.clientHeight;
let canvasWidth = canvas.clientWidth;
let x = 10; //Hesaplamada daha rahat işlem yapabilmek için
let y = 10;
let hareketX = 0;
let hareketY = 0;

let elmaX = 5; // ctx.fillRect(100,100,18,18) 100 yazmak yerine 5*20 yazmak için
let elmaY = 5;
let konum = 20;
let boyut = 18; //yılanın boyutu genişlik & yükseklik
let yilanUzunlugu = 3; // Toplam kaç parçadan oluşucağını söyleceğim.
let yilanParcalari = []; //Parçalarımın hangi x ve y konumunda olduğunu burada tutacağım
let skor = 0;
let hiz = 10;
let can = 3;
let zorlukSeviyesi = "orta"; // Kolay, orta ve zor seviyeleri için varsayılan zorluk seviyesi

class YilanParcasi{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}



function oyunuCiz(){
   ekraniTemizle();
   yilaniCiz();
   elmayiCiz();
   yilanHareketiniGuncelle();
   elmaninKonumunuGuncelle();
   skoruCiz();
   hiziCiz();
   canCiz();
   const sonuc = oyunBittiMi();

   if(sonuc)
        return;

   setTimeout(oyunuCiz,1000/hiz);
}

function ekraniTemizle(){ // Sayfayı ilk açtığında ekran temizlensin
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);//Bu rengin elementte nereye gitmesini belirlersin
}

function yilaniCiz(){
    ctx.fillStyle ="green";
    for(let i of yilanParcalari){ //Yılan parçalarını elde ettik
        ctx.fillRect(i.x*konum,i.y*konum,boyut,boyut)
    }

    yilanParcalari.push(new YilanParcasi(x,y)); // push metodu listeye eklemek istediğimiz şeyleri bu metotola ekliyoruz.

    if(yilanParcalari.length> yilanUzunlugu){
        yilanParcalari.shift(); // shift methodu otomatik olarak son eklenen kaydı siler.
    }

    ctx.fillStyle = "white";
    ctx.fillRect(x*konum,y*konum,boyut,boyut);
}

function elmayiCiz(){

    ctx.fillStyle = "red";
    ctx.fillRect(elmaX*konum,elmaY*konum,boyut,boyut);
}

function tusHareketleri(e){

     switch (e.keyCode){
        case 37: //sol
        if(hareketX === 1) return;//Soldayken sağa çevirme
            hareketX = -1; // -1 mevcut değeri azaltıyor
            hareketY = 0;
            break;
        case 38: //yukarı
        if(hareketY === 1) return;
            hareketY = -1;
            hareketX = 0;
            break;
        case 39: //sağa
        if(hareketX === -1) return;
            hareketX = 1;
            hareketY = 0;
            break;  
        case 40: // aşağı
        if(hareketY === -1) return;
            hareketY = 1;
            hareketX = 0;
            break;
    }
}
    // if(e.keyCode === 38){ //yukarı
    //     hareketY--;
    //     hareketX = 0;
    // }else if(e.keyCode === 37){ //sola
    //     hareketX--;
    //     hareketY = 0;
    // }else if(e.keyCode === 39){ //sağa
    //     hareketX++;
    //     hareketY = 0;
    // }else if(e.keyCode === 40){ //aşağı
    //     hareketY++;
    //     hareketX = 0;
    // }
    // console.log(e.keyCode);
//}

function yilanHareketiniGuncelle(){
    let sonucX = x + hareketX;
    let sonucY = y + hareketY;
 
    if(sonucY < 0){  
         sonucY = 19;
    }else if (sonucY >19){
     sonucY = 0;
    }
  
    if(sonucX <0){
         sonucX = 19
    }else if(sonucX > 19){
         sonucX = 0;
    }
 
    x = sonucX;
    y = sonucY;
}

function elmaninKonumunuGuncelle(){
    if(x === elmaX && y === elmaY) {  //elma ile yılan aynı konumda
      elmaX = Math.floor(Math.random()*konum);
      elmaY = Math.floor(Math.random()*konum);

    let elmaKonumuMüsaitMi = false;
    while(!elmaKonumuMüsaitMi)
        elmaKonumuMüsaitMi = true;
        for(let parca of yilanParcalari){ //yilanın parçalarını tek tek aldık
            if(parca.x === elmaX && parca.y === elmaY){
                elmaX = Math.floor(Math.random()*konum);
                elmaY = Math.floor(Math.random()*konum);
                elmaKonumuMüsaitMi = false;
            }
        }
    
      yilanUzunlugu++;
      skor +=10;

        if(yilanUzunlugu % 3 === 0){
            hiz+=3;
        }

    } 
}

function skoruCiz(){
    ctx.fillStyle = "white";
    ctx.font = "20px verdana"
    ctx.fillText(`Skor: ${skor} `,canvasWidth-90,30)  //Ekrana yazı yazmamızı sağlıyor.
}

function hiziCiz(){

    ctx.fillStyle ="white"
    ctx.fillFont = "20px verdena";
    ctx.fillText(`Hız:${hiz}`, canvasWidth-160,30);

}

function oyunBittiMi(){
    let oyunBitti = false;
    if(hareketX === 0 && hareketY === 0) return;

    for(let index in yilanParcalari){
        let parca = yilanParcalari[index]
        if(parca.x === x && parca.y === y){
            can--;
            if(can < 0){
                can = 0;
                oyunBitti = true
               
            }
            yilanParcalari.splice(0,index);
            yilanUzunlugu = yilanParcalari.length;
            skor = yilanUzunlugu*10;
            break;
        }
    }

    if(oyunBitti){
        ctx.fillStyle="white";
        ctx.font = "50 px verdena";
         ctx.fillText(`Game Over!`, canvasWidth/4.5, canvasHeight/2);
    }

    return oyunBitti;
}
function canCiz() {
    ctx.fillStyle = "white";
    ctx.font = "25px verdena";
    ctx.fillText(`Can: ${can}`, canvasWidth - 240, 30)
}


function yeniOyun(){
    document.location.reload();//Sayfayı yeniler.
}

function zorlukSeviyesineGoreHizAyarla(zorluk){
    switch (zorluk){
        case "kolay": 
            return 3; // Kolay seviye için daha yavaş hız
        case "orta":
            return 10; // Orta seviye için orta hız
        case "zor":
            return 30; // Zor seviye için daha hızlı hız
        default:
            return 10; // Varsayılan olarak orta seviyeyi kullan
    }
}

function zorlukSeviyesiniAyarla(zorluk){ //hangi zorluk seviyesinin seçildiğini belirlemek için kullanılır.
    zorlukSeviyesi =zorluk;
    hiz = zorlukSeviyesineGoreHizAyarla(zorluk);
}

function startGame(){
    document.getElementById("start-screen").style.display ="none";

}
oyunuCiz();