"use strict";
class User {
    constructor() {
        this.name = "";
    }
    method() {
        const type = "Deneme1";
    }
}
function myFunction() {
    const age = 10;
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
let firstName = "Cagla Tunc";
//Implicit => Önerme // Tip atamıyorum. Atadığım değeri default tip olarak alıyor. 
let firstName2 = "Cagla Tunc";
let number;
let number2;
number = true;
number2 = number;
number = 0;
number2 = number;
number = "Value";
number2 = number;
let number3; //unknown direkt set edilememz, tip güvenliği yapılmak zorunda.
let number4 = number;
number3 = 0;
if (typeof number3 === "number") {
    number4 = number3;
}
number3 = "";
number3 = true;
//array oluşturmak
const names = [];
names.push("Cagla");
for (let n of names)
    console.log(n);
