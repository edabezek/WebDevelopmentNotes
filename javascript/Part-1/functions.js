//değişken tanımladığımızda bunlar pc nin ram kısmında depolanır
function kelimeYazdır(kelime,adet){
    for(let i=0;i<adet;i++){
        console.log(kelime);
    }
}
kelimeYazdır("merhaba",4);

//dikdörtgenin alan ve çevresini hesaplayan fonksiyon
function alanHesapla(kenar){
    result = kenar * kenar ;
    console.log("Alan : "+result);
}

function cevreHesapla(kısaKenar,uzunKenar){
    result = (kısaKenar + uzunKenar)*2 ;
    console.log("Çevre : "+result);
}

function alanCevreHesapla(kısa,uzun){
    let alan=kısa*uzun;
    let cevre=(kısa+uzun)*2;
    return `alan : ${alan} çevre : ${cevre}`;
}
alanHesapla(5,4);
cevreHesapla(5,4);
let sonuc=alanCevreHesapla(5,4);
console.log(sonuc);

//yazı tura
function yazıTuraAt(){
    let random=Math.random();
    console.log(random);
    if (random<0.5) {
        console.log("Yazı")
    }else{
        console.log("Tura");
    }
}
yazıTuraAt();

//kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyon
function tamBolenler(sayi){
    let dizi = [];
    for (let i = 2; i < sayi; i++) {
      if (sayi%i==0) {
        dizi.push(i);
      }
    
    }
    console.log(dizi);
}
tamBolenler(10);
tamBolenler(15);

//değişken sayıda parametre alan toplam isminde fonksiyon tanımlayınız
function toplam(params){
    let sonuc=0;
    for (let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }
    console.log(sonuc);
}
toplam(10,12,13);
toplam(1,2);









