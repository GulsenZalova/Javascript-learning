const products=[
    {id:1, name:"Samsung s5", price:300},
    {id:2, name:"Samsung s6", price:300},
    {id:3, name:"Samsung s7", price:300}
]

function addProduct(prd,callback){
    setTimeout(()=>{
        products.push(prd)
        callback()
    }, 1500)
}

function getProdcucts(){
    setTimeout(()=>{
        products.forEach(p=>{
            console.log(p.name)
        })

    },1000)
}



addProduct({id:3, name:"Samsung s8", price:300},getProdcucts)

