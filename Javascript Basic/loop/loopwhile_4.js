// Aşağıdakı proqram login kontrol üçün yazılıb. (while ilə)

let k_username="Gülşən";
let k_password="0202";
let qeydiyyat=false;

while (qeydiyyat==false){
    let username=prompt("Zəhmət olmasa istifadəçi adınızı daxil edin: ");
    let password=prompt("Zəhmət olmasa istifadəçi parolunuzu daxil edin: ");
    if((username==k_username) && (password==k_password)){
        alert("Xoş gəlmişsiniz.");
        qeydiyyat=true;
    }
    else {
        alert("Giriş məlumatlarınız yalnışdır.")
    }   
}