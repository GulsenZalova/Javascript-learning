// Aşağıdakı proqram arraydəki məlumatları cümlə şəklində ekrana yazdırmaq üçün yazılıb.
var now=2018;
var models=['Toyota','Mazda','Mercedes','Opel'];
var years=['2015','2012','2016','2014'];

for (let i=0; i<models.length; i++){
    console.log(models[i] + ' '+ years[i] + ' model və ' + (now -years[i] )+ ' yaşdında bir maşındır ' )
}