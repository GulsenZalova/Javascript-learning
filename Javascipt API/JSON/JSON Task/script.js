document.querySelector("#getEmployee").addEventListener("click", loadEmployee)

function loadEmployee(){
    const xhr=new XMLHttpRequest()
    xhr.open("GET","employees.json",true)
    var loadimage=document.querySelector("#loading")
    loadimage.style.display="block"
    
    setTimeout(()=>{
        xhr.onload=function(){
            loadimage.style.display="none"
            if(this.status===200){
                // Məlumatı string formada alacaq
                console.log(this.responseText) 
                // Məlumatı json formada alacaq
                console.log(JSON.parse(this.responseText))
                let employees=JSON.parse(this.responseText)
    
    
                let html="";
                employees.forEach(employee => {
                    html+= `<tr>
                    <td>${employee.firstname}</td>
                    <td>${employee.lastname}</td>
                    <td>${employee.age}</td>
                    <td>${employee.retired}</td>
                </tr>`
                });
            
                document.querySelector("#employees").innerHTML=html
    
            }
        }
        xhr.send()
        
    },1500)
 
}
