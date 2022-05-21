// Nümunə 1
const p = new Promise(function(resolve,reject){
    if(true){
        resolve("Uğurlu")
    }else{
        reject("Uğursuz")
    }
})

p.then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
})


// Nümumə 2

new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(5)
    })
}).then(function(number){
    console.log(number)
    return number*number
}).then(function(number){
    console.log(number)
    return number+number
}).then(function(number){
    console.log(number)
})


// Nümunə 3

const isMomHappy=true

const willGetNewPhone=new Promise((resolve,reject)=>{
    if(isMomHappy){
        const phone={
            name:"Phone 8",
            price:"4000",
            color:"Silver"
        }
        resolve(phone)
    }else{
        const error=new Error("Mom is not happy")
        reject(error)
    }
})


const showToFriends=function(phone){
    const message=`Bu da mənim yeni telefonum `+ phone.name
    return Promise.resolve(message)
}

const askMOm = function(){
    willGetNewPhone.then(showToFriends)
    .then(message=>console.log(message))
    .catch(function(erorr){
        console.log(erorr)
    })
}
askMOm()