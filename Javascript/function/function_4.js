// Aşağıdakı proqram daxil edilən ədədin faktorialını tapmaq üçün yazılmışdır.

let num=prompt("Zəhmət olmasa ədəd daxil edin. ");

function faktorialHesabla (num){
    for(let i=1; i<num ;i-- ){
        num*=i;
    }
    return num;
}
let faktorial=faktorialHesabla(num);
console.log(faktorial)
