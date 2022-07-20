let arr=[1,2,3,4,5,6]

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

for(let i=0; i<arr.length; i++){
    console.log(i)
}

for(let element of arr){
    console.log(element)
}

for(let element in arr){
    console.log(element)
}


arr.forEach(function(element,index){
    console.log("value: " + element + " index "+ index)
})

arr.forEach((element,index)=>{
    console.log("value: " + element + " index "+ index)
})


// forEach methodunu callback function ilə özün yaz.
// Burada makeForEach higher order funtion-dır
// Callback callback function-dır

makeForEach(arr,function(element,index){
    console.log("Elementim " + element + " indexim " + index)
})
function makeForEach(arr,callback){
    for(let i=0; i<arr.length;i++){
        callback(arr[i],i)
    }
}

