document.querySelector("#form").addEventListener("submit", function(e){
    const yeniIsim=document.querySelector(".isim").value;
    let isimArr;
    if(localStorage.getItem("isimListi")===null){
        isimArr=[];
    }else{
        isimArr=JSON.parse(localStorage.getItem("isimListi"));
    }
    isimArr.push(yeniIsim);
    localStorage.setItem("isimListi", JSON.stringify(isimArr));

   e.preventDefault()
})