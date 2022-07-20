let arr=[1,2,3,4,5,6]
// ap funksiyası
const newArray=arr.map(function(element){
   return element*2
})
console.log(newArray)

const newArray2=arr.map(element=>element*10)

console.log(newArray2)


// Map funksiyasını özün yaz (həmçinin callback ilə)
makeMap(arr)
function makeMap(arr){
    let newArr=[]
    for(let i=0; i<arr.length;i++){
        newArr.push(arr[i]*2)
    }
    console.log(newArr)
}

function makeMapmethod(arr,callback){
    let newArr=[]
    for(let i=0; i<arr.length; i++){
        newArr.push(callback(arr[i]))
    }

    return newArr
}
const netice=makeMapmethod(arr,function(element){
   return element*10
})
console.log(netice)