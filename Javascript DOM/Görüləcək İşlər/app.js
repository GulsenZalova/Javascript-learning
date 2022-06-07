let txtAddTask=document.getElementById("txt-add-task");
let btnAddTask=document.getElementById("btn-add-task");
let taskText=document.querySelector(".task-text");
let taskList=document.querySelector("#container-task-list .task-list");
let btnAllTasksComplete=document.querySelector("#btn-all-tasks-complete");
let containerNewTask=document.getElementById("container-new-task");
let containerTaskList=document.getElementById("container-task-list");
let tasks=[];
// let newTaskText=""
eventListeners()
addTask()
getTasks()

// Listenerler
function eventListeners(){
    btnAddTask.addEventListener("click", addTask);

}

function addTask(){
    let newTaskText=txtAddTask.value.trim();
    if(newTaskText!==null &&newTaskText!==""){
        tasks.push(newTaskText);
        addTaskUI(newTaskText);
        addTaskLocalStorage();
        showInfo("success","Yeni task əlavə edildi",containerNewTask,"",1500);
        txtAddTask.value= ""
    }

}

// burada parametr şəkilində gələn imputa yazılmış dəyərdir.
function addTaskUI(newTask){
const task=document.createElement("div");
const taskText=document.createElement("div");
const taskİcon=document.createElement("div");

task.className="task";
taskText.className="task-text";
taskİcon.className="task-icon";
taskİcon.innerHTML='<i class="fa-solid fa-circle-check"></i>'

taskText.innerText=newTask;

task.appendChild(taskText);
task.appendChild(taskİcon);

taskList.appendChild(task)

taskList.insertBefore(task, btnAllTasksComplete)
}

function  addTaskLocalStorage(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function getTasks(){
    if(localStorage.getItem("tasks")!==null && localStorage.getItem("tasks")!==""){
        tasks=JSON.parse(localStorage.getItem("tasks"))
        tasks.forEach(element => addTaskUI(element));
    }else{
        showInfo("danger","Qeydli task yoxdur",containerTaskList,taskList,timeout="")
    }
}

function showInfo(type="",message="",container="",ref="",timeout=""){
/*
<div class="info info-success">
                <div class="info-icon">
                    <span><i class="fa-solid fa-circle-info"></i></span>
                </div>
            <div class="info-text">
               Yeni Task əlavə olundu
            </div>
            </div>
*/

let info=document.createElement("div");
let infoİcon=document.createElement("div");
let infoText=document.createElement("div");

info.className=`info info-${type}`;
infoİcon.className="info-icon";
infoText.className="info-text";

infoText.innerText=message;
infoİcon.innerHTML='<i class="fa-solid fa-circle-info"></i>'

info.appendChild(infoİcon);
info.appendChild(infoText);
if(ref!==""){
    container.insertBefore(info,ref)
}else{
    container.appendChild(info)
}

if(timeout!=="")
setTimeout(()=>{
    info.remove()
},timeout)
}