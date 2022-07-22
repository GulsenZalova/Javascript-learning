let inputValue=document.querySelector(".input-value");
let btnAddTask=document.querySelector(".btn-add-task");
let taskArea=document.querySelector(".task-area");
let taskList=document.querySelector(".task-list");
let taskArray;

// addEventListener
btnAddTask.addEventListener("click",addTask);
taskList.addEventListener("click",taskCompleteDelete)
// document.addEventListener("DOMContentLoaded",readLocalStorage)
window.addEventListener("load",readLocalStorage)

// Functions
function addTask(){
    if(inputValue.value ===""){
        alert("Yeni task daxil edilməyib!!!")
    }else{
        createTask(inputValue.value)
        addLocalStorage(inputValue.value)
        inputValue.value=""
    }
}

function createTask(newTask){
    // Create Elements
    let createDiv=document.createElement("div");
    let createLi=document.createElement("li");
    let createComBtn=document.createElement("button");
    let createDelBtn=document.createElement("button");
    // Add Class
    createDiv.classList.add("task-area");
    createLi.classList.add("newtask");
    createComBtn.classList.add("btn");
    createComBtn.classList.add("btn-task-complete");
    createDelBtn.classList.add("btn");
    createDelBtn.classList.add("btn-task-delete");
    // Add İnnerHTML
    createComBtn.innerHTML=`<i class="fa-solid fa-square-check"></i>`;
    createDelBtn.innerHTML=`<i class="fa-solid fa-trash-can"></i>`;
    // Add ContentText
    createLi.textContent=newTask
    // Appenchilds
    createDiv.appendChild(createLi);
    createDiv.appendChild(createComBtn);
    createDiv.appendChild(createDelBtn);
    taskList.appendChild(createDiv);
}

function addLocalStorage(newTask){
    if(localStorage.getItem("taskInfo")===null){
        taskArray=[]
    }else{
        taskArray=JSON.parse(localStorage.getItem("taskInfo"))
    }
    taskArray.push(newTask)
    localStorage.setItem("taskInfo",JSON.stringify(taskArray))
}

function taskCompleteDelete(e){
    let clickTask=e.target
    if(clickTask.classList.contains("btn-task-complete")){
        clickTask.parentElement.classList.toggle("task-completed")
    }else if(clickTask.classList.contains("btn-task-delete")){ 
        if(confirm("Silmək istədiyinizdən əminsinizmi?")){
            clickTask.parentElement.classList.toggle("task-deleted")
        let deletedTask=clickTask.parentElement.children[0].innerText
        console.log(deletedTask)
        deleteFromLocalStorage(deletedTask)
        clickTask.parentElement.addEventListener("transitionend",function(){
            clickTask.parentElement.remove()
        })
        }
    }
}

function deleteFromLocalStorage(deletedTask){
    let taskbox;
    if(localStorage.getItem("taskInfo")===null){
        taskbox=[]
    }
    else{
         taskbox=JSON.parse(localStorage.getItem("taskInfo"))
    }
        console.log(taskbox.indexOf(deletedTask))
        let deleteTaskIndex=taskbox.indexOf(deletedTask)
        taskbox.splice(deleteTaskIndex,1)
        localStorage.setItem("taskInfo",JSON.stringify(taskbox))
}

function readLocalStorage(){
    let showTasks;
    if(localStorage.getItem("taskInfo")===null){
        showTasks=[]
    }else{
       showTasks= JSON.parse(localStorage.getItem("taskInfo"))
       showTasks.forEach(showTask => {
        createTask(showTask)
       });
    }
}