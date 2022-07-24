// Select Document Elements
let ad=document.getElementById("ad");
let soyad=document.getElementById("soyad");
let mail=document.getElementById("mail");
let crudForm=document.querySelector(".crud-form");
let saveUpdateBtn=document.querySelector(".saveupdate");
let crudList=document.querySelector(".crud-list");
let usersArr=[]
let selectedTr=undefined

// AddEventLİsteners

crudForm.addEventListener("submit",saveUser)
crudList.addEventListener("click",updateDelete)

// Functions

function saveUser(e){
    e.preventDefault()
    const userInfos={
        ad:ad.value,
        soyad:soyad.value,
        mail:mail.value
    }
    let infoControlAnswer=infoControl(userInfos)
    if(infoControlAnswer.situation){
        if(selectedTr){
            updatedUser(userInfos)
            clearSpace() 
        }else{
            crudListAdd(userInfos)
            clearSpace() 
        }
    }else{
        situationMessage(infoControlAnswer.situation,infoControlAnswer.message)
    }

}
function infoControl(userInfos){
    for(let userInfo in userInfos ){
        if(userInfos[userInfo]){   
        }
        else{
            return {
                situation:false,
                message:"Do not leave blank space"
            }
        }
    }
    return{
        situation:true,
        message:"check successful"
   } 
}

function situationMessage(situation,message){
    let messageDiv=document.createElement("div");
    messageDiv.className="info"
    messageDiv.textContent=message
    if(situation){
        messageDiv.classList.add("info-success")
    }else{
        messageDiv.classList.add("info-error")
    }
    document.querySelector(".container").insertBefore(messageDiv,crudForm)
   
    setTimeout(()=>{
        let deleteMessageDiv=document.querySelector(".info")
        if(deleteMessageDiv){
            deleteMessageDiv.remove()
        }
    },2000)

}

function clearSpace(){
    ad.value="",
    soyad.value="",
    mail.value=""
} 

function crudListAdd(userInfos){
   let tr=document.createElement("tr");
   tr.innerHTML=`
                <td>${userInfos.ad}</td>
                <td>${userInfos.soyad}</td>
                <td>${userInfos.mail}</td>
                <td>
                    <button class="btn btn--edit"><i class="fa fa-edit" aria-hidden="true"></i></button>
                    <button class="btn btn--delete"> <i class="fa fa-trash" aria-hidden="true"></i></button>
                </td>
   `
    crudList.appendChild(tr)
    usersArr.push(userInfos)
    situationMessage(true,"new user added")
}

function updateDelete(e){
    if(e.target.classList.contains("btn--delete")){
       let deletedTr=e.target.parentElement.parentElement
       let deletedMail=e.target.parentElement.previousElementSibling.textContent
       console.log(deletedTr)
       console.log(deletedMail)
       deletedUser(deletedTr,deletedMail)
    }else if(e.target.classList.contains("btn--edit")){
        let tr=e.target.parentElement.parentElement
        ad.value=tr.cells[0].textContent
        soyad.value=tr.cells[1].textContent
        mail.value=tr.cells[2].textContent
        selectedTr=tr
        document.querySelector(".saveupdate").value="Update"
    }
}

function deletedUser(deletedTr,deletedMail){
    deletedTr.remove()
    usersArr.forEach((user,index)=>{
        if(user.mail===deletedMail){
            usersArr.splice(index,1)
        }
    })
    situationMessage(true,"The current user has been deleted")
    clearSpace()
    document.querySelector(".saveupdate").value="Save"
}

function updatedUser(userInfos){
    for(let i=0;i<usersArr.length;i++){
        if(usersArr[i].mail===selectedTr.cells[2].textContent){
            usersArr[i]=userInfos;
            break
        }
    }
    selectedTr.cells[0].textContent=userInfos.ad
    selectedTr.cells[1].textContent=userInfos.soyad
    selectedTr.cells[2].textContent=userInfos.mail
    document.querySelector(".saveupdate").value="Save"
    secilensetir=undefined;
    console.log(usersArr)
}