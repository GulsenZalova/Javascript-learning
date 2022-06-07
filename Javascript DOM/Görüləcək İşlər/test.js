let txtAddTask=document.getElementById("txt-add-task");
let btnAddTask=document.getElementById("btn-add-task");
let taskText=document.querySelector(".task-text");
let infoSuccess=document.querySelector(".info-success");
let taskList=document.querySelector(".task-list");
let tasks=[];

btnAddTask.addEventListener("click", addTask)

function addTask(){
if(txtAddTask.value ===""){
    alert("Task daxil etməmisiniz!!!")
}else{
    let newTaskText=txtAddTask.value.trim()
    tasks.push(newTaskText)
    localStorage.setItem("Tasks",JSON.stringify(tasks))
    txtAddTask.value=""
    infoSuccess.style.display="flex"
    taskList.innerHTML="";
    for(let task in tasks){
        taskList.innerHTML +=`
       <div class="task">
       <div class="task-text">
        ${tasks[task]}
       </div>
       <div class="task-icon">
           <i class="fa-solid fa-circle-check"></i>
       </div>
   </div>
       `   
    
    } 

}
}

