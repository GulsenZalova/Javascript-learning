const getBtn=document.getElementById("get")
const postBtn=document.getElementById("post")
const putPatchBtn=document.getElementById("put-patch")
const eyniAndaMüracietBtn=document.getElementById("eyni-anda-müraciet")
const headersBtn=document.getElementById("headers")
const errorBtn=document.getElementById("error")

getBtn.addEventListener("click",getData)
postBtn.addEventListener("click",postData)
putPatchBtn.addEventListener("click",putPatchData)
eyniAndaMüracietBtn.addEventListener("click", eyniAndaMüracietData)
headersBtn.addEventListener("click",headersData)
errorBtn.addEventListener("click",errorlar)

function getData(){
 axios({
    method:"GET",
    url:"https://jsonplaceholder.typicode.com/users",
    params:{
        _limit:2
    }

 }).then(response=>neticeniYazdir(response))
    .catch(error=>console.log(error))
}

function postData(){
    console.log("salam post")
    }

function putPatchData(){
console.log("salam putpatch")
}
function eyniAndaMüracietData(){
    console.log("salam eyniAndaMüraciet")
    }

function headersData(){
    console.log("salam headers")
}

function errorlar(){
    console.log("salam erorlar")
}


function xetanıYaz(error){
 console.log(error)
 document.querySelector(".netice").innerHTML=
 `
 <div class="notification is-info">
 <div class="columns is-mobile is-vcentered">
 <div class="column"><h1 class="subtitle">Nəticə</h1></div>
 <div class="column"><h1 class="title">${error}</h1></div>
 </div>
 </div>
 `
}

function neticeniYazdir(response){
    document.querySelector(".netice").innerHTML=
    `
    <div class="notification is-info">
    <div class="columns is-mobile is-vcentered">
    <div class="column"><h1 class="subtitle">Nəticə</h1></div>
    <div class="column"><h1 class="title">${response.status}</h1></div>
    </div>
    </div>

    <div class="section">
        <article class="message is-success">
            <div class="message-header">
              <p>Header</p>
            </div>
            <div class="message-body">
             <pre> ${JSON.stringify( response.headers,null,4)}</pre>
            </div>
          </article>
</div>


<div class="section">
<article class="message is-success">
    <div class="message-header">
      <p>Data</p>
    </div>
    <div class="message-body">
      ${JSON.stringify( response.data,null,4)}
    </div>
  </article>
</div>

<div class="section">
<article class="message is-success">
    <div class="message-header">
      <p>Config</p>
    </div>
    <div class="message-body">
      ${JSON.stringify( response.config,null,4)} </div>
  </article>
</div>
    `
}