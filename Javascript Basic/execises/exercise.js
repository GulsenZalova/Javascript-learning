// Sual 1: Klavyeden daxil olan 3 sayının ortalamasını tapın.
// let a=parseInt(prompt("a"))
// let b=parseInt(prompt("b"))
// let c=parseInt(prompt("c"))

// let orta=(a+b+c)/3
// console.log(orta)

// Sual 2: Klavyeden daxil olan rəqəmlərə əsasən hansı növ üçbucaq olduğunu tapın.

// let a=parseInt(prompt("a"))
// let b=parseInt(prompt("b"))
// let c=parseInt(prompt("c"))

// if((a==b) && (b==c) && (a==c)){
//     console.log("Bərabərtərəfli üçbucaq")
// }else if((a!=b) && ( a!=c) && (b!=c)) {
//     console.log("Müxtəliftərəfli üçbucaq")
// }else if((a==b)||(a==c)||(b==c)){
//     console.log("Bərabəryanlı üçbucaq")
// }


// Sual 3: İmtahan nəticələrinə görə uğurlu/uğursuz olduğunu yazdır.

// let vize=(parseInt(prompt("vize")) * 40)/100
// let final=(parseInt(prompt("final")) * 60)/100
// let netice=vize+final


// if((netice>=50)&&(netice<=100)){
//     console.log("Təbriklər")
// }else if((netice<=50)&&(netice>=0)){
//     console.log("Təəssüflər")
// }else{
//     console.log("Yalnışlıq var")
// }

// Sual 4: Aralarında vergül olmaqla 1-10 arası rəqəmləri yazdır
// let metn=""
// for(let i=1; i<=10; i++){
//     if(i!==10){
//         metn+=i+","
//     }else{
//         metn+=i
//     }
// }
// console.log(metn)

// Sual 5:Klavyeden daxil olan ədədin faktorialını tapın.

// let a=parseInt(prompt("a"))
// let sum=1;
// for(let i=1; i<=a; i++){
//     sum*=i
// }
// console.log(sum)


// Sual 6: Vurma cədvəlini yazın
// for(let i=0; i<=9; i++){
//     for(let j=1; j<=9; j++){
//         console.log(i*j)
//     }
    
// }

// Sual 7: 2 ədədin ƏBOB-nu tap.

// let a=parseInt(prompt("a"))
// let b=parseInt(prompt("b"))
// let sum=[]

// for(let i=0; i<=a; i++){
//     if(a%i===0){
//         for(let j=0; j<=b; j++){
//             if(b%j===0){
//                 if((i===j)){
//                     sum.push(i)
//                 }
//             }
//         }    
//     }
// }
// console.log(sum[sum.length-1])



// let a=parseInt(prompt("a"))
// let b=parseInt(prompt("b"))

// let ebob=1
// let kontrol=2

// if((kontrol<=a)&&(kontrol<=b)){
//     if((a%kontrol===0)&&(b%kontrol===0)){
//         ebob=kontrol
//     }
//     kontrol++
// }

// if(ebob==1){
//     console.log("QSƏ")
// }else{
//     console.log(ebob)
// }

// 
// Verilən ədədə qədər qarşılıqlı sadə ədədləri tapın

// let a=parseInt(prompt("a"))
// for(let i=2; i<=a; i++){
//     let QSƏ=true
//     for(let j=2; j<i;j++){
//          if(i%j==0){
//             QSƏ=false
//             break
//          }
//     }
//     if(QSƏ){
//         console.log(i)
//     }
// }