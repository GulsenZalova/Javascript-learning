let additem=document.querySelector("#addItem")
let deleteitem=document.querySelector("#deleteItem")
let contentText=document.querySelector(".content")
let input=document.querySelector(".input")
let items;

additem.addEventListener("click" , addLocalStorage)
window.addEventListener("load",contentTextFunc)
deleteitem.addEventListener("click",deleteLocalStorage)


function addLocalStorage(e){
    e.preventDefault()
    if(input.value===""){
        alert("Siz Məlumat daxil etməmisiniz!!!")
    }
    else{
       if(localStorage.getItem("addInfo")===null){
            items=[]
       }else{
        JSON.parse(localStorage.getItem("addInfo"))
       }
       items.push(input.value)
       localStorage.setItem("addInfo",JSON.stringify(items))
       contentTextFunc()
       input.value=""
    }

}

function contentTextFunc(){
    if(localStorage.getItem("addInfo")===null){
        contentText.innerText="Local Storage-də göstəriləcək bir məlumat yoxdur"
    }else{
     contentText.innerText=""  
     let infos=JSON.parse(localStorage.getItem("addInfo"))
     infos.forEach(info => {
        contentText.innerHTML+=`${info}<br>`
     });
    }
}

function deleteLocalStorage(){
    if(localStorage.getItem("addInfo")===null){
        alert("LocalStorage-də silinəcək bir məlumat yoxdur")
    }
    else{
        localStorage.removeItem("addInfo")
        contentTextFunc()
    }
}

