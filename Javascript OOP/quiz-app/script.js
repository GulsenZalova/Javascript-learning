// BU funksional olmayan və uzun yazmaq metodudur.

// let sual={
//     sual: "Aşağıdakılardan hansı frontend proqramlaşdırma dilidir?",
//     variantlar: {
//         a: "html",
//         b: "javascript",
//         c: "css",
//     },
//     doğrucavab:"b",
//     cavabYoxla: function (cavab){
//         return cavab===this.doğrucavab
//     }
// }

// console.log(sual.cavabYoxla("a"))


// let sual2={
//     sual:"Aşağıdakılardan hansı backend proqramlaşdırma dilidir?",
//     variantlar:{
//     a: "php",
//     b: "javascript",
//     c: "css",
//     },
//     dogrucavab: "a",
//     cavabYoxla:function(cavab){
//         return cavab===this.dogrucavab
//     }

// }
// console.log(sual2.cavabYoxla("a"))


// Sadə nümunələr

// function Person(name, year, job){
//     this.name=name;
//     this.year=year;
//     this.job=job;
//     this.calculateage=function(){
//         return 2022-this.year
//     }
// }

// let murad= new Person("Murad",1997,"Tələbə")
// console.log(murad.name + " "+ murad.year + " " + murad.job + " "+ murad.calculateage() )


// let Person=function(name, year, job){
//     this.name=name;
//     this.year=year;
//     this.job=job;
//     this.calculateage=function(){
//         return 2022-this.year
//     }
// }

// let Gulshan=new Person("Gülşən","1997","Frontend developer")
// console.log(Gulshan.year + Gulshan.job + Gulshan.calculateage()+ Gulshan.name)


function Person(name, year, job){
    this.name=name;
    this.year=year;
    this.job=job;
    this.calculateage=function(){
        return 2022-this.year
    }
}
let Gulshan=new Person("Gülşən","1997","Frontend developer")
console.log(Gulshan)

Person.prototype.adyoxla=function(){
    return this.name
}

Person.prototype.yasyoxla=function(){
    return 2022-this.year
}

console.log(Gulshan.yasyoxla())
console.log(Gulshan.adyoxla())
console.log(Gulshan.calculateage())