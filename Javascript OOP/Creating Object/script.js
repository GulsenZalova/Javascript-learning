
let EmployeeConsctuctor=function (name,salary){
    this.name=name;
    this.salary=salary; 
}

EmployeeConsctuctor.prototype.Employe=function(){
        let vergi=0
        let date= new Date().getMonth()+1
        console.log(date)
        let totalmaas=this.salary * date
        console.log(totalmaas)
       if(this.salary<=20000){
        vergi=totalmaas * 0.2
        console.log(vergi)
       }
       else if(this.salary>20000 && this.salary<30000){
          vergi=totalmaas * 0.25
          console.log(vergi)
       }
       else{
           vergi= totalmaas * 0.3
       }
       return {
           vergi : vergi,
           maas: totalmaas-vergi
       }
}
 let Gulshan = new EmployeeConsctuctor("Gülşən", 4000)
 let vergimiqdarı=Gulshan.Employe().vergi
 let maasmiqdarı=Gulshan.Employe().maas
 console.log(vergimiqdarı)
 console.log(maasmiqdarı)
 console.log(`${Gulshan.name} adlı işçi  ${vergimiqdarı} qədər tutulma ilə ${maasmiqdarı}  ödəniş almışdır.`)



// Object.create metodu, interitence 

let Person={
    maas: 2000,
    surname:"Zalova"
}

let Gulshan2=Object.create(Person)
Gulshan2.name="Gülşən",
Gulshan2.year=1997,
Gulshan2.job="frontend developer"

let telebe = Object.create(Gulshan)
console.log(Person)
console.log(Gulshan)
console.log(telebe)

console.log(telebe.name)
console.log(telebe.maas)
console.log(Gulshan.maas)
console.log(Gulshan.surname)
console.log(Person.job)
console.log(Person.year)


let Gulshan3=Object.create(Person,{
    name: {value : "Gülşən"}
})
console.log(Gulshan3)
