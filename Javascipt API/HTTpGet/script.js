document.querySelector("#getOne").addEventListener("click",getOne)
document.querySelector("#getAll").addEventListener("click",getAll)

function getAll(){
var loadimage=document.querySelector("#loading")
loadimage.style.display="block"
 const xhr=new XMLHttpRequest()
 const url="https://jsonplaceholder.typicode.com/posts"
xhr.open("GET", url, true)

setTimeout(()=>{
    loadimage.style.display="none"
    xhr.onload=function(){
        if(this.status===200){
            var posts=JSON.parse(this.responseText)
            let html= "";
            posts.forEach( post => {
                html+= 
               `<div class="card"
                <div class="card-header">
                    ${post.title}
                </div>
                <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p> ${post.body}</p>
                <blockquote>
                </div>
               </div>`
            });
        document.querySelector("#results").innerHTML=html
        }
    }
    
    xhr.send()

}, 1500)

}


function getOne(){
    var id=document.querySelector("#inputid").value
    var loadimage=document.querySelector("#loading")
    loadimage.style.display="block"
     const xhr=new XMLHttpRequest()
     const url="https://jsonplaceholder.typicode.com/posts/"+id;
    xhr.open("GET", url, true)
    setTimeout(()=>{
        loadimage.style.display="none"
        xhr.onload=function(){
            if(this.status===200){
                var post= JSON.parse(this.responseText)
                let html= "";
                    html+= 
                   `<div class="card"
                    <div class="card-header">
                        ${post.id}
                    </div>
                    <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p> ${post.body}</p>
                    <blockquote>
                    </div>
                   </div>`
            document.querySelector("#results").innerHTML=html
            }
        }
        
        xhr.send()
    
    }, 1500)
}