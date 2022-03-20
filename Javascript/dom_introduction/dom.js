let isBlue=false
let blue=document.getElementById("Blue");

setInterval(function(){
    if(isBlue){
        blue.style.background="Blue";
        isBlue=false
    }else{
        blue.style.background="Green";
        isBlue=true
    }

},1000);

let isRed=false;
let red=document.getElementById="Red";
setInterval(function(){
    if(isRed){
        red.style.background="Blue";
        isRed=false
    }else{
        red.style.background="Green";
        isRed=true
    }

},1000);

let isGreen=false;
let green=document.getElementById="Green";
setInterval(function(){
    if(isGreen){
        green.style.background="Green";
        isGreen=false
    }else{
        green.style.background="Red";
        isGreen=true;
    }

},1000)