let taskList=document.querySelector("#task-list");

// Removing Elements

// taskList.remove()

taskList.childNodes[1].remove()
taskList.childNodes[7].remove()

taskList.children[0].remove()
taskList.children[1].remove()
taskList.children[2].remove()
taskList.children[3].remove()

taskList.removeChild(taskList.children[2])


// removing attribute

for(let i=0;i<taskList.children.length; i++){
    taskList.children[i].removeAttribute("class")
}


// Replaceing Elements

let cardHeader=document.querySelector(".card-header");

let h1=document.createElement("h1");
h1.setAttribute("class","card-header");
let text=document.createTextNode("My List");
h1.appendChild(text)

let card=document.querySelector(".card")
card.replaceChild(h1,cardHeader)

console.log(taskList)

// Classes
let val;
let link=taskList.children[0].children[0]
link.getAttribute(d)

console.log(val)
console.log(link)

