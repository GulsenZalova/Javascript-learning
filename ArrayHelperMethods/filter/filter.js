let bitkiler=[
    {ad:"üzüm", nov:"meyve"},
    {ad:"alma", nov:"meyve"},
    {ad:"pomidor", nov:"terevez"},
    {ad:"kartof", nov:"terevez"},
]

function novunuTap(bitkiler){
    let newArr=[]
    for(let i=0; i<bitkiler.length;i++){
        let bitkinov=bitkiler[i].nov
        if(bitkinov==="meyve"){
            newArr.push(bitkiler[i])
        }
    }
    return newArr
}
console.log(novunuTap(bitkiler))



function Tap(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i])
    }
}
Tap(bitkiler,function(bitki){
    if(bitki.nov==='terevez'){
        console.log(bitki)
        return bitki
     }
})

Tap(bitkiler,function(bitki){
    if(bitki.nov==='meyve'){
       console.log(bitki)
       return bitki
    }
})


const meyve=bitkiler.filter(bitki=>{
    if(bitki.nov==="meyve"){
        return bitki
    }
})
console.log(meyve)