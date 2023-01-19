//fonksiyonlar scope oluşturur , for-if (block larda) oluşturmaz(içindeki değişken global variable gibi olur. var ile tanımlı olmalı)
//ancak block içinde let,const tanımlaması scope oluşturur.
function yazdır(){
    var isim="ayse";
    var yas=27;
    console.log("function scope :",isim,yas);
}
if (true) {
    var isim="zeynep";
    console.log(isim);
}
console.log(isim);
yazdır();