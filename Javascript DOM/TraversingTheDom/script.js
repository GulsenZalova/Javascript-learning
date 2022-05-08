let val;
let list=document.querySelector(".list-group")
val=list.childNodes[0].nodeName
val=list.childNodes[0].nodeType
val=list.childNodes[1].nodeType
console.log(val)


val=list.children[0].style.color='red'
val.list.children[1].textContent='salam'
val=list.childElementCount
val=list.parentNode
val=list.parentElement
val=list.parentElement.parentElement

val=list.children[0].nextSibling
val=list.children[0].nextElementSibling

val=list.children[1].previousSibling
val=list.children[1].previousElementSibling
console.log(val)

for(let i=0; i<list.children.length; i++){
    console.log(list.children[i])
}

for(let i=0; i<list.childNodes.length; i++){
    console.log(list.childNodes[i])
}

for(let i=0; i<list.childNodes.length; i++){

   if(list.childNodes[i].nodeType===1){
       console.log(list.childNodes[i])
   }
}

for(let i=0; i<list.childNodes.length; i++){
    if(list.childNodes[i].nodeType===3){
        console.log(list.childNodes[i])
    }
}


