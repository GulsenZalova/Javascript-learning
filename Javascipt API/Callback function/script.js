const products=[
    {id:1, name:"Samsung s5", price:300},
    {id:2, name:"Samsung s6", price:300},
    {id:3, name:"Samsung s7", price:300}
]

let added=true

function addProduct(prd,callback){
  if(added){
    setTimeout(()=>{
        products.push(prd)
        callback(null, prd)
    }, 1500)
  }else{
        callback("500", prd)
  }
}

function getProdcucts(){
    setTimeout(()=>{
        products.forEach(p=>{
            console.log(p.name)
        })

    },1000)
}



addProduct({id:3, name:"Samsung s8", price:300},getProdcucts)

addProduct({id:3, name:"Samsung s8", price:300}, function(err, data){
    if(err){
        console.log("xeta:" + err)
    }else{
        console.log(data)
    }

})

