document.querySelector("#getOne").addEventListener("click",getOne)
document.querySelector("#getAll").addEventListener("click",getAll)
document.querySelector("#postData").addEventListener("click",postData)


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


// Yen bir məlumatın bazaya yazılması
function postData(){
   const data={
       userId: 1,
       title: "new title",
       body:"new body",
   }
    const json=JSON.stringify(data)
    // console.log(post)
    // console.log(data)
    const url = "https://jsonplaceholder.typicode.com/posts/"
    const xhr= new XMLHttpRequest()
    xhr.open("POST", url , true)
    xhr.setRequestHeader("Content-type","application/json;charset=utf-8")

    xhr.onload=function(){
        if(xhr.readyState===4 && xhr.status===201){
            const post=xhr.responseText
            console.log(post)
        }
    }

    xhr.send(json)
}


