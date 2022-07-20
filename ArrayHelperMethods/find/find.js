// const users=[
//     {id:1, ad:"a"},
//     {id:2, ad:"b"},
//     {id:3, ad:"c"},
//     {id:4, ad:"d"},
//     {id:5, ad:"e"},
//     {id:6, ad:"f"}
// ]
// // Find method
// function findMethod(){
//     console.log(users.find(user=> user.id=="2")) 
// }
// findMethod()

// // Find method özün yaz
// function finduser(istifadeciler,user){
//     for(let i=0; i<users.length; i++){
//         if(users[i].id===user){
//             console.log(users[i])
//         }
//     }
// }
// finduser(users,5)


// // Find method özün yaz callback ilə

// function istifadeciaxtar(istifadeciler,idyaz){
//     for(let i=0; i<istifadeciler.length;i++){
//         if(idyaz(istifadeciler[i])){
//             return istifadeciler[i]
//         }
//     }
// }
// const yoxla=istifadeciaxtar(users, function(user){
//     return user.id===1
// })
// console.log(yoxla)

// let say=[1,2,3,4,5,6]

// const test=say.reduce(function(pre,cur){
//     if(cur===11){
//       return cur
//     }else{
//         return pre
//     }

// },undefined)

// console.log(test)


