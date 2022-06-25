const btnTextGetir= document.getElementById("btn-text-getir")
const btnJsonGetir= document.getElementById("btn-json-getir")
const btnApidenJsonGetir= document.getElementById("btn-apiden-json-getir")
const btnElaveEt=document.getElementById("btn-elave-et")
const netice=document.getElementById("netice")


btnApidenJsonGetir.addEventListener("click",getJsonFromApi)
btnElaveEt.addEventListener("click",elaveEt)


function getJsonFromApi(e){
     e.preventDefault()
     fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(melumat=>ekranaYazdir(melumat))
}

function elaveEt(e){
  e.preventDefault()
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    body:JSON.stringify({
        title:"testing",
        body:"yeni post",
        userId:3
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    
  })
   .then(response=>response.json())
   .then(netice=>console.log(netice))
}


async function elaveEt(e){
    e.preventDefault()
   const response= await fetch('https://jsonplaceholder.typicode.com/posts',{
      method:"POST",
      body:JSON.stringify({
          title:"testing",
          body:"yeni post",
          userId:3
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      
    })
     const son=await response.json()
     console.log(son)
  }
  


function ekranaYazdir(data){
    let metn=""
    data.forEach(user=>{
        metn+=`<li>${user.name}</li>`
    })
    netice.innerHTML=metn
}