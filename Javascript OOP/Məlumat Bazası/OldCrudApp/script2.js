class İstifadeci{
    constructor(ad,soyad,mail){
        this.ad=ad,
        this.soyad=soyad,
        this.mail=mail
    }
}

class Ekran{
    constructor(){
        this.ad=document.getElementById("ad");
        this.soyad=document.getElementById("soyad");
        this.mail=document.getElementById("mail");
        this.istifadeciListi=document.querySelector(".istifadeci-listi");
        this.qeydEtyenilebtn=document.querySelector(".qeydetdeyisdir");
    }
}

// const Gulshan=new İstifadeci("Gülşən","Zalova","zalova0202@gmail.com")

