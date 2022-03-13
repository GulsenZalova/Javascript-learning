// Aşağıdakı proqram tələbədən məlumatını alıb, balını hesablamaq üçün yazılıb
var ad=prompt("Adınızı daxil edin: ");
var soyad=prompt("Soyadınızı daxil edin: ");
var fənn=prompt("Fənnin adnı daxil edin: ");
var bal_1=prompt("Birinci imtahanının nəticəsini daxil edin: ");
var bal_2=prompt("İkinci  imtahanının nəticəsini daxil edin: ");
var ortalama=(Number(bal_1) + Number(bal_2))/2; 
alert(ad + " " + soyad + " " + " " + "sizin" + " " + fənn + " " + "fənnindən ortalama balınız" + " " + ortalama + " " + "təşkil edir" )