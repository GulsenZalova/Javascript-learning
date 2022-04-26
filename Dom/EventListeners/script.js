// Event Listeners

const btn=document.querySelector("#btnDeleteAll");
// const btn2=document.querySelector("#btnAddNewTask");

// btn.addEventListener("click",function(e){
    // console.log("click etdim")
    // let val;
    // val=e
    // val=e.target
    // val=e.target.id
    // val=e.target.classList
    // val=e.type
//     console.log(val)
//     e.preventDefault()
// })
// btn.addEventListener("click", btnclick(e))
// btn2.addEventListener("click", btnclick2())

// function btnclick(e){
//     console.log("click etdim")
// }

// function btnclick2(){
//     console.log("tıkladım")
// }


// Mouse Event

// const btn=document.querySelector("#btnDeleteAll");
// const ul=document.querySelector("#task-list")

// btn.addEventListener("click" ,  eventHandler)
// ul.addEventListener("click", eventHandler)

// function eventHandler(event){
//     console.log(`event type: ${event.type}`)
// }


// Double Click

// const btn=document.querySelector("#btnDeleteAll")

// btn.addEventListener("dblclick", eventHandler)

// function eventHandler(event){
//     console.log(`event type: ${event.type}`)
// }


// Mouse Down

// btn.addEventListener("mousedown", eventHandler)
// function eventHandler(event){
//     console.log(`event type: ${event.type}`)
// }


// Mouse Up

// btn.addEventListener("mouseup", eventHandler )
// function eventHandler(event){
//     console.log(`event type: ${event.type}`)
// }


// Mouse Leave and Mouse enter

// const ul=document.querySelector("#task-list")

// ul.addEventListener("mouseenter", eventHandler)
// ul.addEventListener("mouseleave",eventHandler)

// function eventHandler(event){
//     console.log(`event type: ${event.type}`)
// }

// Mouse Over and Mouse Out
// const ul=document.querySelector("#task-list")

// ul.addEventListener("mouseover", eventHandler)
// ul.addEventListener("mouseout",eventHandler)

// function eventHandler(event){
//     console.log(`event type: ${event.type}`)
// }


// Mouse Move

const ul=document.querySelector("#task-list")

ul.addEventListener("mousemove", eventHandler)

function eventHandler(event){
    console.log(`event type: ${event.type}`)
    console.log(`event X : ${event.offsetX} event Y : ${event.offsetY}`)
}