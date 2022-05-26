const newTask=document.querySelector(".input-task");
const newTaskAddBtn=document.querySelector(".btn-task-add");
const taskList=document.querySelector(".task-list");


newTaskAddBtn.addEventListener("click", taskAdd);
function taskAdd(e){
    if(newTask.value==''){
        alert("Task Əlavə edin!!!")
    }else{
        let taskDiv=document.createElement("div");
        taskDiv.classList.add("task-item");
        // li yaratma
        let taskLi=document.createElement("li");
        taskLi.classList.add("task-tanim")
        taskLi.innerText=newTask.value;
        taskDiv.appendChild(taskLi)
        taskList.appendChild(taskDiv)
        // button yaratma
        let taskBtnTamam=document.createElement("button");
        taskBtnTamam.classList.add("task-btn");
        taskBtnTamam.classList.add("task-btn-tamam");
        taskBtnTamam.innerHTML='<i class="fa-solid fa-square-check"></i>';
        taskDiv.appendChild(taskBtnTamam);
       
        let taskBtnSil=document.createElement("button");
        taskBtnSil.classList.add("task-btn");
        taskBtnSil.classList.add("task-btn-sil");
        taskBtnSil.innerHTML='<i class="fa-solid fa-trash"></i>';
        taskDiv.appendChild(taskBtnSil);

        // LocalStorage
        logalStoage(newTask.value);
        newTask.value='';
    }
    e.preventDefault()
    
}

taskList.addEventListener("click",tasksilTamamla)

function tasksilTamamla(e){
    let klikElementi=e.target
    if(klikElementi.classList.contains("task-btn-tamam")){
        klikElementi.parentElement.classList.toggle("task-tamam");
    }

    if(klikElementi.classList.contains("task-btn-sil")){
        klikElementi.parentElement.classList.toggle("yoxacix")
        klikElementi.parentElement.addEventListener("transitionend",function(){
               klikElementi.parentElement.remove()
        })
    }

}


function logalStoage(newTask){
let tasklar;
if(localStorage.getItem('tasklar')===null){
    tasklar=[];
}else{
    tasklar=JSON.parse(localStorage.getItem('tasklar'));
}
tasklar.push(newTask);
localStorage.setItem('tasklar', JSON.stringify(tasklar));
}


function localStorageOxu(){

}