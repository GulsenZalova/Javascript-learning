const products=[
    {id:1, name:"Samsung s5", price:300},
    {id:2, name:"Samsung s6", price:300},
    {id:3, name:"Samsung s7", price:300}
]

let added=false

function addProduct(prd,callback){
    return new Promise (function(resolve,reject){
        setTimeout(()=>{
            products.push(prd)
            let added=false
            if(added){
                return resolve()
            }else{
                return reject("xeta 400")
            }
        })

    })
}

function getProdcucts(){
    setTimeout(()=>{
        products.forEach(p=>{
            console.log(p.name)
        })
    },1000)
}


addProduct( {id:3, name:"Samsung s8", price:300})
.then(getProdcucts)
.catch(function(err){
    console.log(err)
})
