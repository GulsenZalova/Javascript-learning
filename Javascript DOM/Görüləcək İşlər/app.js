let txtAddTask=document.getElementById("txt-add-task");
let btnAddTask=document.getElementById("btn-add-task");
let taskText=document.querySelector(".task-text");
let taskList=document.querySelector(".task-list");
let btnAllTasksComplete=document.querySelector("#btn-all-tasks-complete")
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
        txtAddTask.value= ""
    }

}

// burada parametr şəkilində gələn imputa yazılmış dəyərdir.
function addTaskUI(newTask){
 /*
 <!-- <div class="task">
                    <div class="task-text">
                        Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquid nemo beatae. Beatae tempore accusamus cupiditate, harum fugit quis ullam totam aut neque placeat dignissimos quia sequi eligendi, eum similique.
                    </div>
                    <div class="task-icon">
                             <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div> -->
 
 */

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

taskList.insertBefore(task , btnAllTasksComplete)
}

function  addTaskLocalStorage(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function getTasks(){
    if(localStorage.getItem("tasks")!==null && localStorage.getItem("tasks")!==""){
        tasks=JSON.parse(localStorage.getItem("tasks"))
        tasks.forEach(element => addTaskUI(element));
    }else{
        // qeydli task yoxdur infosu cıxacaq
    }
}
