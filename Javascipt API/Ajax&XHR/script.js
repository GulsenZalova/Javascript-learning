var xhr=new XMLHttpRequest
console.log(xhr)

xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
        if(xhr.status===200){
            console.log(xhr.responseText)
        }else if(xhr.status===404)
        console.log("Təəssüfki qaynaq tapıla bilmədi.")
    }
}

xhr.onprogress=function(){
    console.log("Sorğunuz hal-hazırda icradadır.")
}


xhr.open("GET","msg.txt",false)
// xhr.open("GET","msg1.txt",true)
// xhr.open("GET","msg2.txt",true)
console.log("Salam")
xhr.send()