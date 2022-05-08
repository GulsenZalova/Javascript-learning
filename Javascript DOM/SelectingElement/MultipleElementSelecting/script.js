let val;
// document.getElementByClassName()

val=document.getElementsByClassName("list-group-item");
// val=document.getElementsByClassName("list-group-item")[0]
val[3].style.color='red'
val[0].textContent='salam'



for(let i=0;i<val.length; i++){
    console.log(val[i].style.color='red')
}
for(let i=0; i<val.length; i++){
    console.log(val[i].textContent='item')
}



// document.getElementByTagName()

let val;
val=document.getElementsByTagName("a")
val=document.getElementById("task-list").getElementsByTagName('a')
console.log(val)


// document.querySelectorAll()

let val;
val=document.querySelectorAll("li")

val.forEach(function(item){
    console.log(item)
})
console.log(val)

val.forEach(function(item,index){
   item.textContent=`${index}-hello`
})
console.log(val)

val=document.querySelectorAll("li:nth-child(odd)");

val.forEach(function(item){
    item.style.color='green'
    item.style.backgroundColor='red'
})
let call;

call=document.querySelectorAll("li:nth-child(even)")
call.forEach(function(item){
  item.style.color='red'
  item.style.backgroundColor='green'
})