// // Creating Element
// let li=document.createElement("li");
// // Add class
// li.className=("list-group-item list-group-item-secondary")
// // Add attribut
// li.setAttribute("title","new item")
// // Text Node
// const text=document.createTextNode("new item");
// li.appendChild(text)

// const a=document.createElement("a");
// a.setAttribute("href","#");
// a.className="delete-item float-right";
// a.innerHTML='<i class="fas fa-times"></i>';
// // append a to li
// li.appendChild(a)
// // append li to ul
// document.querySelector("#task-list").appendChild(li);

// console.log(li)

let div=document.createElement("div");
div.className="card-header";

let text=document.createTextNode("Task List");
div.appendChild(text)

const a=document.createElement("a");
a.id="btnDeleteAll";
a.className="btn btn-outline-danger btn-sm delete-all float-right";
a.setAttribute("href","#")

const a_text=document.createTextNode("Delete All");
a.appendChild(a_text)

div.appendChild(a)
document.querySelector(".card mt-3").appendChild(div)

console.log(a)