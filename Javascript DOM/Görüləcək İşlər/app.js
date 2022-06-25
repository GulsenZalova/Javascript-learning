let txtAddTask=document.getElementById("txt-add-task");
let btnAddTask=document.getElementById("btn-add-task");
let taskText=document.querySelector(".task-text");
let taskList=document.querySelector("#container-task-list .task-list");
let btnAllTasksComplete=document.querySelector("#btn-all-tasks-complete");
let containerNewTask=document.getElementById("container-new-task");
let containerTaskList=document.getElementById("container-task-list");
let completedTaskList=document.querySelector("#container-completed-task-list .task-list");
let containerCompletedTaskList=document.querySelector("#container-completed-task-list")
let btnAllTasksRemove=document.getElementById("btn-all-tasks-remove");
let tasks=[];

let completedtasks=[]
// let newTaskText=""
eventListeners()
addTask()
getTasks()
getCompletedTasks()

// Listenerler
function eventListeners(){
    btnAddTask.addEventListener("click", addTask);
    taskList.addEventListener("click",addCompleteTask)
    completedTaskList.addEventListener("click",removeCompleteTask)

}

function addTask(){
    let newTaskText=txtAddTask.value.trim();
    if(newTaskText!==null &&newTaskText!==""){
        if(tasks.indexOf(newTaskText)===-1){
            tasks.push(newTaskText);
            addTaskUI(newTaskText);
            addTaskLocalStorage();
            showInfo("success","Yeni task əlavə edildi",containerNewTask,"",1500);
            txtAddTask.value= ""
            let info=document.querySelector("#container-task-list .info")
          if(info!==null){
            info.remove();
            btnAllTasksComplete.style.display="block"
          }
        }else{
            showInfo("danger","Bu task siyahıda var artıq",containerNewTask,"",2000);
            txtAddTask.value= ""
        }
    }
    else{
        showInfo("danger","Task daxil edilməyib",containerNewTask,"",2000);
        txtAddTask.value= "" 
    }

}

function addCompleteTask(e){
    if(e.target.className==="fa-solid fa-circle-check"){
        console.log(e.target)
      let completedTaskText=e.target.parentElement.previousElementSibling.textContent
      completedtasks.push(completedTaskText)
      addCompleteTaskLocalStorage();
    // test
     addCompletedTaskUI(completedTaskText)
     let info=document.querySelector("#container-completed-task-list .info") 
     if(info!==null){
       info.remove();
       btnAllTasksRemove.style.display="block"
     }
     removeTaskLocalStorage(completedTaskText);
     removeTaskUI(e.target);
     if(tasks.length===0){
        getTasks() 
     }
    }
}

// burada parametr şəkilində gələn imputa yazılmış dəyərdir.
function addTaskUI(newtaskText){
const task=document.createElement("div");
const taskText=document.createElement("div");
const taskİcon=document.createElement("div");

task.className="task";
taskText.className="task-text";
taskİcon.className="task-icon";
taskİcon.innerHTML='<i class="fa-solid fa-circle-check"></i>'

taskText.innerText=newtaskText;

task.appendChild(taskText);
task.appendChild(taskİcon);

taskList.appendChild(task)

taskList.insertBefore(task, btnAllTasksComplete)
}

function addCompletedTaskUI(completedTaskText){
    const task=document.createElement("div");
    const taskText=document.createElement("div");
    const taskİcon=document.createElement("div");
    
    task.className="task";
    taskText.className="task-text";
    taskİcon.className="task-icon";
    taskİcon.innerHTML='<i class="fa-solid fa-trash-can"></i>'
    
    taskText.innerText=completedTaskText;
    
    task.appendChild(taskText);
    task.appendChild(taskİcon);
    
    taskList.appendChild(task)
    
    completedTaskList.insertBefore(task, btnAllTasksRemove)

}

function  addTaskLocalStorage(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function  removeTaskLocalStorage(completedTaskText){
    tasks.forEach(function(removeTask,index){
        if(removeTask==completedTaskText){
            tasks.splice(index,1)
        }
        localStorage.setItem("tasks",JSON.stringify(tasks))
    })

}

function removeTaskUI(removeTask){
    removeTask.parentElement.parentElement.remove()
}
function addCompleteTaskLocalStorage(){
    localStorage.setItem("completedtasks",JSON.stringify(completedtasks))
}
 function removeCompleteTask(e){
    let removeCompleteTasks= e.target
    let remove=e.target.parentElement.previousElementSibling.textContent
    if(removeCompleteTasks.className==="fa-solid fa-trash-can"){
        removeCompleteTasks.parentElement.parentElement.remove()
    }
    completedtasks.forEach(function(completeTaskRemove,index){
        if(completeTaskRemove===remove){
            completedtasks.splice(index,1)
        }
        localStorage.setItem("completedtasks",JSON.stringify(completedtasks))
        let info=document.querySelector("#container-completed-task-list .info") 
     if(info!==null){
       info.remove();
       btnAllTasksRemove.style.display="block"
     }
     removeTaskLocalStorage(remove);
     removeTaskUI(e.target);
     if(completedtasks.length===0){
       getCompletedTasks()
     }
    })
 }
 
function getTasks(){
    if(localStorage.getItem("tasks")!==null && localStorage.getItem("tasks")!==""&& localStorage.getItem("tasks")!=="[]"){
        tasks=JSON.parse(localStorage.getItem("tasks"))
        tasks.forEach(element => addTaskUI(element));
        btnAllTasksComplete.style.display="block"
    }else{
        showInfo("danger","Qeydli task yoxdur",containerTaskList,taskList);
        btnAllTasksComplete.style.display="none"
    }
}
function getCompletedTasks(){
    if(localStorage.getItem("completedtasks")!==null && localStorage.getItem("completedtasks")!==""){
        completedtasks=JSON.parse(localStorage.getItem("completedtasks"))
        completedtasks.forEach(element => addCompletedTaskUI(element));
        btnAllTasksRemove.style.display="block"
    }else{
        showInfo("danger","Tamamlanmış task yoxdur",containerCompletedTaskList,completedTaskList);
        btnAllTasksRemove.style.display="none"
    }

}

function showInfo(type="",message="",container="",ref="",timeout=""){
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