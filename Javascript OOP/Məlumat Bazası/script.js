const ad=document.getElementById("ad");
const soyad=document.getElementById("soyad");
const mail=document.getElementById("mail")
const form=document.getElementById("form-rehber")

form.addEventListener("submit", qeydEt)

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
       console.log(netice.mesaj)
   }
}

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