// Aşağıdakı proqram array daxilinə element əlavə etmək üçün yazılıb.
var now=2022;
var models=['Toyota','Mazda','Mercedes','Opel'];
var years=['2015','2012','2016','2014'];

let model=prompt("Zəhmət olmasa model daxil edin: ");
let year=prompt("Zəhmət olmasa il daxil edin");

models.push(model);
years.push(year);

for (let i=0; i<models.length; i++){
    console.log(models[i]+' '+ years[i]+" model və "+ (now-years[i]) + " yaşında bir maşındır")
}