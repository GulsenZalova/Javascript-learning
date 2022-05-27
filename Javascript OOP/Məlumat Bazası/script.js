const ad=document.getElementById("ad");
const soyad=document.getElementById("soyad");
const mail=document.getElementById("mail")
const form=document.getElementById("form-rehber")
// Forma m'lumatlar yazılıb submit edildikdən sonra qeydEt funksiyası işə düşür
form.addEventListener("submit", qeydEt)

// qeydEt funksiyası inputlardan aldığı dəyərləri obyekt halında  kontrol edilməsi üçün verilenleriKontrolEt adlı funksiyaya parametr kimi göndərir.
function qeydEt(e){
e.preventDefault()  
  const degerler={
      ad: ad.value,
      soyad:soyad.value,
      mail:mail.value
  }
  const netice=verilenleriKontrolEt(degerler)
   if(netice.durum){
       console.log("Davam edə bilərsiniz.")
   }else{
       melumatYarat(netice.mesaj,netice.durum)
       console.log(netice.mesaj)
   }
}
// İnputlardan gələn obyektin içərisində gəzərək onların dəyərlərini yoxlayır və əgər məlumat varsa, bunu göstərir, yoxdursa obyekt formasında dəyərlər göndərir.

function verilenleriKontrolEt(degerler){
    for(const deger in degerler){
        if(degerler[deger]){
            console.log(degerler[deger])
        }else{
            const netice={
                durum:false,
                mesaj:"Məlumat daxil etməmisiniz!"
            }
            return netice
        }

    }
    return{
        durum:true,
        mesaj:"tamamdır"
    }
}


// melumatYarat funksiyası ilə hər hansı bir xətaya yol verildikdə məlumat blokunun çıxarılmasını etdim.

function melumatYarat(mesaj,durum){
   const melumat=document.createElement("div");
   melumat.textContent=mesaj
   melumat.className='bilgi'
document.querySelector(".container").insertBefore(melumat,form)
if(durum){
    melumat.classList.add("bilgi--success")
   
}else{
    melumat.classList.add("bilgi--error")

}

}


