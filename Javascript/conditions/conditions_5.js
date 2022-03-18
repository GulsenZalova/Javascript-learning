// Aşağıdakı proqram istifadəçi tərəfindən daxil edilən rəqəmə əsasən ilin fəslinin müəyyənləşdirilməsi üçün yazılmışdır.(if, else if və else ilə)

let fesil=prompt("Zəhmət olmasa dəyər daxil edin: ");

if(fesil=="12"|| fesil=="1" || fesil=="2"){
    alert(" Hal-hazırda qış fəslidir. ")
}else if (fesil=="3"|| fesil=="4" || fesil=="5"){
    alert(" Hal-hazırda yaz fəslidir. ")      
}else if (fesil=="6"|| fesil=="7" || fesil=="8"){
    alert(" Hal-hazırda yay fəslidir. ")      
}else if (fesil=="9"|| fesil=="10" || fesil=="11"){
    alert(" Hal-hazırda payız fəslidir. ")      
}else{
    alert("Zəhmət olmasa düzgün dəyər daxil etdiyinizdən əmin olun !!!")
}

