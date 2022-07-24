const ad=document.getElementById("ad");
const soyad=document.getElementById("soyad");
const mail=document.getElementById("mail")
const form=document.getElementById("form-rehber");
const istifadeciListi=document.querySelector(".istifadeci-listi");
const butunistifadəciler=[];
let secilensetir=undefined
// Forma m'lumatlar yazılıb submit edildikdən sonra qeydEt funksiyası işə düşür
form.addEventListener("submit", qeydEt);

// qeydEt funksiyası inputlardan aldığı dəyərləri obyekt halında  kontrol edilməsi üçün verilenleriKontrolEt adlı funksiyaya parametr kimi göndərir.
function qeydEt(e){
e.preventDefault()  
  const elavevedeyisiklik={
      ad: ad.value,
      soyad:soyad.value,
      mail:mail.value
  }
  const netice=verilenleriKontrolEt(elavevedeyisiklik)
   if(netice.durum){
       if(secilensetir){
        //   yenile
        istifadeciniYenile(elavevedeyisiklik);
       }else{
        istifadeciElaveEt(elavevedeyisiklik);
       }
   }else{
       melumatYarat(netice.mesaj,netice.durum)
   }
}
// İnputlardan gələn obyektin içərisində gəzərək onların dəyərlərini yoxlayır və əgər məlumat varsa, bunu göstərir, yoxdursa obyekt formasında dəyərlər göndərir.

function verilenleriKontrolEt(elavevedeyisiklik){
    for(const deger in elavevedeyisiklik){
        if(elavevedeyisiklik[deger]){
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
function istifadeciElaveEt(elavevedeyisiklik){
const tr=document.createElement("tr");
 tr.innerHTML= 
 `
 <tr>
                        <td>${elavevedeyisiklik.ad}</td>
                        <td>${elavevedeyisiklik.soyad}</td>
                        <td>${elavevedeyisiklik.mail}</td>
                        <td>

                            <button class="btn btn--edit"> <i class="fa fa-edit" aria-hidden="true"></i></button>
                            <button class="btn btn--delete">  <i class="fa fa-trash" aria-hidden="true"></i></button> 
                        </td>
 `
 istifadeciListi.appendChild(tr)
butunistifadəciler.push(elavevedeyisiklik)
melumatYarat("İstifadəçi qeyd edildi.", true)
}


istifadeciListi.addEventListener("click",istifadeciİsleri)

function istifadeciİsleri(event){

 console.log(event.target)
 if(event.target.classList.contains("btn--delete")){
   const silinecekTr=event.target.parentElement.parentElement;
   const silinecekMail=event.target.parentElement.previousElementSibling.textContent;
   istifadeciniSil(silinecekTr,silinecekMail)
 }else if(event.target.classList.contains("btn--edit")){
     document.querySelector(".qeydetdeyisdir").value='Yenilə';
     let secilenTr=event.target.parentElement.parentElement;
     const yenilenecekMail=secilenTr.cells[2].textContent;
     ad.value=secilenTr.cells[0].textContent
     soyad.value=secilenTr.cells[1].textContent;
     mail.value=secilenTr.cells[2].textContent;
     secilensetir=secilenTr;
     console.log(butunistifadəciler)
 }
 
}

function istifadeciniSil(silinecekTr,silinecekMail){
    silinecekTr.remove();
    console.log(silinecekTr,silinecekMail)
    butunistifadəciler.forEach((istifadeci,index)=>{
        if(istifadeci.mail===silinecekMail){
            butunistifadəciler.splice(index,1)
        }
    })
    console.log(butunistifadəciler)
    melumatTemizle();
    document.querySelector(".qeydetdeyisdir").value="Kaydet"
}

function istifadeciniYenile(istifadeci){
    // istifadeci parametrinin icinde istifadecinin yenni deyeri var.
    // Secilen Setirde kohne deyerler var.
    for(let i=0; i<butunistifadəciler.length;i++){
        if(butunistifadəciler[i].mail=== secilensetir.cells[2].textContent){
            butunistifadəciler[i]=istifadeci;
            break;
        }
    }
    secilensetir.cells[0].textContent=istifadeci.ad;
    secilensetir.cells[1].textContent=istifadeci.soyad;
    secilensetir.cells[2].textContent=istifadeci.mail;
    document.querySelector(".qeydetdeyisdir").value="Kaydet";
    secilensetir=undefined;
}

