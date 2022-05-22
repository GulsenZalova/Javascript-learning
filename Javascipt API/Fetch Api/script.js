// text

function getText(){
    fetch("text.txt")
    .then(response=>{
        return response.text()
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.log(error)
    })
}
getText()


// json

function getJson(){
    fetch("products.json")
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.log(error)
    })
}

getJson()

// external api

function getRandonUser(){
    fetch("https://randomuser.me/api/?results=5")
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        data.results.forEach(user => {
          
        let html=""
        html+= 
        `
        <div>
        <img src="${user.picture.medium}"></img>
        <span>${user.name.title}/${user.name.first}/${user.name.last}<span>
        </div>
        `
        document.querySelector("#users").innerHTML=html
        });
    })
    .catch(error=>{
        console.log(error)
    })
}
getRandonUser()

// post external api

function postExternalApi(){
    const url= 'https://jsonplaceholder.typicode.com/todos/'
    const data={
        method: "POST",
        body: JSON.stringify(
        { id: 1,
         name:"Azad"
        }),
        headers: new Headers({
            "content-type" : "application/json"
        })

    }

    fetch(url,data)
    .then(reponse=>{
        console.log(reponse)
    })
    .catch(error=>{
        console.log(error)
    })
}
getExternalApi()
