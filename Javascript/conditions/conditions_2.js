/* Aşağıdakı proqram tələbənin daxil etdiyi məlumatlara əsasən onun imtahanda hansı nəticəni göstərdiyini müəyyənləşdirmək üçün yazılıb.(if, else if və else ilə)*/

let ad=prompt("Zəhmət olmasa adınızı daxil edin: ");
let soyad=prompt("Zəhmət olmasa soyadınızı daxil edin: ");
let fənn=prompt("Zəhmət olmasa fənn adını daxil edin: ");
let imtahanBali=prompt("Zəhmət olmasa imtahan balınızı daxil edin: ");

if(imtahanBali<51){
    alert(ad + " " + soyad + " " + "sizin" + " " + fənn + " " + "fənnindən əldə etdiyiniz nəticə E-dir.")
}else if((imtahanBali>61)&&(imtahanBali<71)){
    alert(ad + " " + soyad + " " + "sizin" + " " + fənn + " " + "fənnindən əldə etdiyiniz nəticə D-dir.")
}else if((imtahanBali>71)&&(imtahanBali<81)){
    alert(ad + " " + soyad + " " + "sizin" + " " + fənn + " " + "fənnindən əldə etdiyiniz nəticə C-dir.")
}else if((imtahanBali>81)&&(imtahanBali<91)){
    alert(ad + " " + soyad + " " + "sizin" + " " + fənn + " " + "fənnindən əldə etdiyiniz nəticə B-dir.")
}else if((imtahanBali>=91)&&(imtahanBali<=100)){
    alert(ad + " " + soyad + " " + "sizin" + " " + fənn + " " + "fənnindən əldə etdiyiniz nəticə A-dir.")
}else{
    alert("Zəhmət olmasa daxil etdiyiniz imtahan nəticəsinin düzgünlüyünü bir daha yoxlayın!!!")
}