
// let EmployeeConsctuctor=function (name,salary){
//     this.name=name;
//     this.salary=salary; 
// }

// EmployeeConsctuctor.prototype.Employe=function(){
//         let vergi=0
//         let date= new Date().getMonth()+1
//         console.log(date)
//         let totalmaas=this.salary * date
//         console.log(totalmaas)
//        if(this.salary<=20000){
//         vergi=totalmaas * 0.2
//         console.log(vergi)
//        }
//        else if(this.salary>20000 && this.salary<30000){
//           vergi=totalmaas * 0.25
//           console.log(vergi)
//        }
//        else{
//            vergi= totalmaas * 0.3
//        }
//        return {
//            vergi : vergi,
//            maas: totalmaas-vergi
//        }
// }
//  let Gulshan = new EmployeeConsctuctor("Gülşən", 4000)
//  let vergimiqdarı=Gulshan.Employe().vergi
//  let maasmiqdarı=Gulshan.Employe().maas
//  console.log(vergimiqdarı)
//  console.log(maasmiqdarı)
//  console.log(`${Gulshan.name} adlı işçi  ${vergimiqdarı} qədər tutulma ilə ${maasmiqdarı}  ödəniş almışdır.`)



// // Object.create metodu, interitence 

// let Person={
//     maas: 2000,
//     surname:"Zalova"
// }

// let Gulshan2=Object.create(Person)
// Gulshan2.name="Gülşən",
// Gulshan2.year=1997,
// Gulshan2.job="frontend developer"

// let telebe = Object.create(Gulshan)
// console.log(Person)
// console.log(Gulshan)
// console.log(telebe)

// console.log(telebe.name)
// console.log(telebe.maas)
// console.log(Gulshan.maas)
// console.log(Gulshan.surname)
// console.log(Person.job)
// console.log(Person.year)


// let Gulshan3=Object.create(Person,{
//     name: {value : "Gülşən"}
// })
// console.log(Gulshan3)





// const arzu=creatPerson("Arzu",35,true)

// function creatPerson(ad,yas,evli){
//    return{
//        name:ad,
//        age:yas,
//        medenidurum: evli
//    }
// }

// console.log(arzu)


// function Person(ad,soyad,yas,evlilik){
//     this.ad=ad,
//     this.soyad=soyad,
//     this.yas=yas,
//     this.evlilik=evlilik,
//     this.məlumatYazdir=function(){
//         return `${this.soyad} + ${this.ad}+ ${this.yas}+ ${this.evlilik}`
//     }
// }

// const person= new Person("Aydın","Aydınov", 25, true)
// console.log(person)
// console.log(person.məlumatYazdir())


// function Person(ad,soyad,yas){
//     this.ad=ad,
//     this.soyad=soyad
//     this.yas=yas,
//     this.məlumatVer=function(){
//         return `Mən ${this.ad} ${this.soyad}, mənim ${this.yas} yaşım var`
//     }
// }

// const Aytən=new Person("Aytən","Hüseynova",18)

// console.log(Aytən.məlumatVer())


// function Person(ad,soyad,yas){
//     this.ad=ad,
//     this.soyad=soyad,
//     this.yas=yas
// }

// Person.prototype.məlumatVer=function(){
//     return `Mən ${this.ad} ${this.soyad}, mənim ${this.yas} yaşım var`
// }

// const Aytən=new Person("Aytən","Hüseynova",18)
// console.log(Aytən.məlumatVer())

// const Sara=new Person("Sara","Əhmədova",32)
// console.log(Sara.məlumatVer())




// console.log(this)


// function test(){
//     console.log(this)
// }
// test()

// const Person={
//     name:"ad",
//     surname: "soyad",
//     fullname:function(){
//         console.log(this)
//     }
// }
// Person.fullname()


// function tələbəMəlumatları(ad,soyad){
//     const telebeler={}
//     this.name=ad,
//     this.soyad=soyad
//     return telebeler
// }

// const Ayan= new tələbəMəlumatları("Ayan","Rəsulova")
// console.log(Ayan)

// function tələbəMəlumatları(ad,soyad){
//     const telebe={
//         name: ad,
//         surname:soyad,
//         fullname:function(){
//             console.log(this)
//             console.log(this.name)
//             console.log(this.surname)
//         }
//     }
//     return telebe
// }
// const Ayan= new tələbəMəlumatları("Ayan","Rəsulova")
// console.log(Ayan)
// console.log(Ayan.fullname())


// function Person(ad,soyad){
//     this.ad=ad,
//     this.soyad=soyad
// }

// Person("s","q")
// console.log(Person)
// console.log(this)
// console.log(ad)


// function Person(_name,_surname){
//     this.name=_name,
//     this.surname=_surname
//     // this.fullname=`${this.name} ${this.surname}`
// }
// const Lale= new Person("Lalə","Əhmədli")
// const Jale= new Person("Jalə","Əhmədli")

// Person.prototype.fullname=fullname=function(){
//     return `${this.name} ${this.surname}`
// }
// console.log(Lale)
// console.log(Jale)
// console.log(Lale.fullname())



const Person=
{
// name:"Arzu",
// surname:"Əlizadə",
}

const P1=Object.create(Person)
console.log(P1.name)

// P1.name="Nigar"
console.log(P1.surname)


console.log(P1.name)
Object.prototype.name="Fuad"
Object.prototype.surname="Vəlizadə"
console.log(P1.surname)
