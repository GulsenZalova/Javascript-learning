const ad=document.getElementById("ad");
const soyad=document.getElementById("soyad");
const mail=document.getElementById("mail")
const form=document.getElementById("form-rehber");
const istifadeciListi=document.querySelector(".istifadeci-listi");
const butunistifadəciler=[];
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
       istifadeciElaveEt(degerler);
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
    melumatTemizle()
    return{
        durum:true,
        mesaj:"Qeyd Edildi."
    }
}


// melumatYarat funksiyası ilə hər hansı bir xətaya yol verildikdə məlumat blokunun çıxarılmasını etdim.

function melumatYarat(mesaj,durum){
   const melumat=document.createElement("div");
   melumat.textContent=mesaj
   melumat.className='bilgi'
document.querySelector(".container").insertBefore(melumat,form)
if(durum){
    melumat.classList.add("bilgi--success"); 
}else{
    melumat.classList.add("bilgi--error")
}

setTimeout(function(){
 const silinecekDiv=document.querySelector(".bilgi")
 if(silinecekDiv){
     silinecekDiv.remove()
 }
},2000)
}

// melumatTemizle funksiyası ilə submit oldunduqdan sonra inputlar bosaldılır.
function melumatTemizle(){
    ad.value="",
    soyad.value="",
    mail.value=""
}

// istifadeciElaveEt funksiyası ilə yeni istifadeci uygun liste elave olundu.
function istifadeciElaveEt(degerler){
const tr=document.createElement("tr");
 tr.innerHTML= 
 `
 <tr>
                        <td>${degerler.ad}</td>
                        <td>${degerler.soyad}</td>
                        <td>${degerler.mail}</td>
                        <td>

                            <button class="btn btn--edit"> <i class="fa fa-edit" aria-hidden="true"></i></button>
                            <button class="btn btn--delete">  <i class="fa fa-trash" aria-hidden="true"></i></button> 
                        </td>
 `
 istifadeciListi.appendChild(tr)
butunistifadəciler.push(degerler)
console.log(butunistifadəciler)
melumatYarat("İstifadəçi qeyd edildi.", true)
}