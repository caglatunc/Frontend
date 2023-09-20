class User{
    name: string = "";
    method(){
        const type: Test="Deneme1"
    }
}
type Test = "Deneme1" | "Deneme2"

type toastrIcon = "warning" | "error" | "success" | "info"

function myFunction(){
    const age:number =10;
}


//any => tüm tipleri kapsar.
//boolean => true/false
//number => 10.50 10 50000 
//string => metinsel değerler
//date => tarih formati için kullanılır.
//biginit => number'dan daha büyük değerler için kullanılıyor.
//symbol => global uniqe identityfier için kullanılıyor
//object => objectler için kullanılır.
//type => type yapısı için kullanılır.


//Explicit => Açık yöntem
let firstName: string ="Cagla Tunc";

//Implicit => Önerme // Tip atamıyorum. Atadığım değeri default tip olarak alıyor. 
let firstName2= "Cagla Tunc";

let number:any;
let number2:any;

number = true;
number2 = number;

number = 0;
number2 = number;

number = "Value";
number2 = number;

let number3:unknown; //unknown direkt set edilememz, tip güvenliği yapılmak zorunda.
let number4=number;

number3 =0;
if(typeof number3 ==="number"){
    number4 = number3;
}

number3= "";
number3= true;

//array oluşturmak

const names: string[] = ["Taner","Cagla","Ersin"]
names.push("Cagla");
for(let n of names)
console.log(n);

const names2: readonly string[] = ["Taner","Cagla","Ersin"] //readonly ile bu liste sadece oluşturulabilir içerisine değer girilmez.
//names2.push("Cagla");

function getTime(): number{ //geriye sadece number dön.
    return new Date().getTime();
}

function printHello(): void{//void: geri dönüş yok
    console.log("İşlem Tamamlandı");
}

function multiply(a: number,b: number, c:number =10,d?: number): number{
    return a*b;
}

multiply(1,2);//bunun hata vermemesi için c'ye değer verdik.


type User2 = (value: number) => number;

const userFunction:  User2 = (value) => value * -1;

let x: unknown = "Hello World";
console.log((x as string).length);

