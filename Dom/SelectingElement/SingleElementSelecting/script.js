// document.getElementbyId()

// let val=document.getElementById("header");
// val=document.getElementById("header").id
// val=document.getElementById("header").className
// val.id
// val.className

// val.style.fontWeight="bold"
// val.style.fontSize="45px"
// val.style.display="none"
// val.style.display="block"
// console.log(val)

// let val=document.getElementById("header")
// val.innerText="<br> Salam necəsən? <br>"
// val.innerHTML="<button> Salam necəsən ?<button> "
// console.log(val)

// documment.querySelector()

// let val=document.querySelector("#header")
// let val=document.querySelector(".card-header")
// val=document.querySelector("h1")
// val=document.querySelector("div")

val=document.querySelector("li").style.color="red";
val=document.querySelector("li:last-child").style.color="green";
val=document.querySelector("li:first-child").style.fontSize="45px"
val=document.querySelector("li:nth-child(3)").style.color="violet"
val=document.querySelector("li:nth-child(1)").style.color="yellow"
val=document.querySelector("li:nth-child(2)").textContent="salam"

val=document.querySelector("li:nth-child(3)").className="list-group-item list-group-item-primary list-group-item list-group-item-secondary"
val=document.querySelector("li:nth-child(2)").classList.add("active")
console.log(val)


