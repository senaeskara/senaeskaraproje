console.console.log("Hello world");
console.log('sena eskara');
console.log(23);
// string özellikleri(metinsel ifade)
let ad1 = "ayşe";
let ad2 = "beyza";
let ad3 = 'mehmet';
console.log(ad1.length);
console.log(ad2.toUpperCase())  ;

// number özelliği(sayısal ifade)
let tamsayi = 40;
let ondaliklisayi = 3.14;
let negatif = -15;

console.log(tamsayi);
console.log(ondaliklisayi);
document.write(negatif);

// özel sayı değerleri
let sonsuz = Infinity;
let notnumber = NaN;

// boolean öperatörü(mantıksal)
let dogruMu = true;
let yanlisMi = false;
let sonuc = 5 > 3 ;

// null 
let tanimsizDeger; 
let bosluk = null;

// objeler(nesneler)
let ogrenci = {
    ad: "ceren",
    soyad: "yılmaz",
    yas: 18,
    dersler: ["mat","fizik"]
};

console.log(ogrenci.ad);
console.log(ogrenci["soyad"]);
document.write(ogrenci.yas);

// ! javascript operatörleri
// ? 1. Aritmetik Operatörler;
let a = 10, b = 3;
console.log(a+b); 
console.log(a-b); 
console.log(a*b); 
console.log(a%b); //mod sonuç1
console.log(a**b); //üs alma

//! Atama Operatörleri;
let x = 5;
x += 3;  // x= x+3 (8)
x -= 2;  // x= x-2 (6)
x *= 2; 
x /= 3; 
console.log(x);

// ! karşılaştırma operatörleri;
let yas = 18;
console.log(yas == "18");
console.log(yas === 18);
console.log(yas != 20);
console.log(yas > 16);
cpnsole.log(yas <= 18);

// ! mantıksal operatörler;
let sinav1 = 50 , sinav2 = 60;

//  and operatörü
console.log(sinav1 >45 && sinav2 >55);

// or operatörü
console.log(sinav1 >60 || sinav2 >55);

//  not operatörü
console.log(!(sinav1 > 60));