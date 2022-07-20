
let eded=[1,2,3,4,5,6]
let newnum=[]

for(let i=0; i<eded.length; i++){
    if(eded[i]>=2){
        newnum.push(eded[i])
        console.log(newnum)
    }
}

if((newnum.length>0)&&(eded.length>newnum.length)){
    console.log("some qaydası ödəndi")
}else if(eded.length===newnum.length){
    console.log("every qaydası ödəndi")
}
