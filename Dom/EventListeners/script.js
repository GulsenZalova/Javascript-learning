// Event Listeners

const btn=document.querySelector("#btnDeleteAll");
const btn2=document.querySelector("#btnAddNewTask");

btn.addEventListener("click",function(e){
    // console.log("click etdim")
    let val;
    val=e
    // val=e.target
    // val=e.target.id
    // val=e.target.classList
    // val=e.type
    console.log(val)
    e.preventDefault()
})
// btn.addEventListener("click", btnclick(e))
// btn2.addEventListener("click", btnclick2())

// function btnclick(e){
//     console.log("click etdim")
// }

// function btnclick2(){
//     console.log("tıkladım")
// }