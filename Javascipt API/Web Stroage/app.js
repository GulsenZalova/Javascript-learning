
let textBox=document.getElementById("text-box");
let btnadd=document.getElementById("add");
let btndelete=document.getElementById("delete");
let content=document.getElementById("content");
let messagges=[]

btnadd.addEventListener("click",addİnfo)
window.addEventListener("load", contentText)
btndelete.addEventListener("click",infoDelete)

function addİnfo(){
   if(textBox.value !==''){
    messagges.push(textBox.value)
    localStorage.setItem("messagge", JSON.stringify(messagges))
    contentText()
    textBox.value=""
   }
   else{
       alert("Məlumat daxil etmədiniz")
   }
}

function contentText(){
    if(localStorage.getItem("messagge")===null){
        content.innerText="Hec bir məlumat tapılmadı."
    }else{
        messagges=JSON.parse(localStorage.getItem("messagge"))
        console.log(messagges[0])
        content.innerText=''
        for(let messagge in messagges){
            content.innerHTML+=`${messagges[messagge]}<br>`
        }
    }
}

function infoDelete(){
    if(localStorage.getItem("messagge")===null){
        alert("Burda silinəcək bir məlumat yoxdur")
    }else{
        localStorage.removeItem("messagge")
        contentText()
    }
}