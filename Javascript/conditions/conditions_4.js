/* Aşağıdakı proqram tələbənin daxil etdiyi məlumatlara əsasən onun imtahanda hansı nəticəni göstərdiyini müəyyənləşdirmək üçün yazılıb.(swtich ilə)*/

let ad=prompt("Zəhmət olmasa adınızı daxil edin: ");
let soyad=prompt("Zəhmət olmasa soyadınızı daxil edin: ");
let fənn=prompt("Zəhmət olmasa fənn adını daxil edin: ");
let imtahanBali=prompt("Zəhmət olmasa imtahan balınızı daxil edin: ");

switch (imtahanBali){
    case '50':
        alert(ad + " " + soyad + " " + "sizin" + " " + fənn + " " + "fənnindən əldə etdiyiniz nəticə F-dir.");
        break;
    case '60':
        alert(ad + " " + soyad + " " + "sizin" + " " + fənn + " " + "fənnindən əldə etdiyiniz nəticə E-dir.");
        break;
    case '70' :
        alert(ad + " " + soyad + " " + "sizin" + " " + fənn + " " + "fənnindən əldə etdiyiniz nəticə D-dir.");
        break;
    case '80':
        alert(ad + " " + soyad + " " + "sizin" + " " + fənn + " " + "fənnindən əldə etdiyiniz nəticə C-dir.");
        break;
    case '90':
        alert(ad + " " + soyad + " " + "sizin" + " " + fənn + " " + "fənnindən əldə etdiyiniz nəticə B-dir.");
        break; 
    case '100':
        alert(ad + " " + soyad + " " + "sizin" + " " + fənn + " " + "fənnindən əldə etdiyiniz nəticə A-dir.");
        break;
    default:
        alert("Zəhmət olmasa daxil etdiyiniz imtahan nəticəsinin düzgünlüyünü bir daha yoxlayın!!!")
}  
// İmtahan balı üçün switch-də aralıq yaza bilmədim, yenidən araşdır

     