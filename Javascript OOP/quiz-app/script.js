
function Sual(sual,variantlar,cavab){
    this.sual=sual,
    this.variantlar=variantlar,
    this.cavab=cavab,
    this.cavabYoxla=function(dogrucavab){
        return  dogrucavab===this.cavab
    }
}


let suallar=[
   new Sual("Sual 1: Aşağıdakılardan hansı frontend proqramlaşdırma dilidir?", {A: "html",B: "javascript",C: "css",D: "bootstrap"}, "b" ),
   new Sual("Sual 2-Aşağıdakılardan hansı backend proqramlaşdırma dilidir?", {A: "php",B: "javascript",C: "css", D: "bootstrap"}, "a" ),
   new Sual("Sual 3-Aşağıdakılardan hansı web proqramlaşdırma sahəsi deyil?", {A: "frontend",B: "backend",C: "web-dizayn",D: "bootstrap"},"c" ),
   new Sual("Sual 1: Aşağıdakılardan hansı frontend proqramlaşdırma dilidir?", {A: "html",B: "javascript",C: "css",D: "bootstrap"}, "b" ),
   new Sual("Sual 2-Aşağıdakılardan hansı backend proqramlaşdırma dilidir?", {A: "php",B: "javascript",C: "css", D: "bootstrap"}, "a" ),
   new Sual("Sual 3-Aşağıdakılardan hansı web proqramlaşdırma sahəsi deyil?", {A: "frontend",B: "backend",C: "web-dizayn",D: "bootstrap"},"c" )
]


function Quiz(suallar){
    this.suallar=suallar,
    this.sualindex=0;
}

Quiz.prototype.sualTerkib=function(){
    return this.suallar[this.sualindex]
}
let quiz=new Quiz(suallar)

document.querySelector(".btn_start").addEventListener("click", function(){
      document.querySelector(".quiz_box").classList.add("active")
      sualGöster(quiz.sualTerkib())
      sualSayiniGoster(quiz.sualindex+1,quiz.suallar.length)
        document.querySelector(".next_btn").classList.remove("show")
        quiz.sualindex+=1
})

const option_list=document.querySelector(".option_list")
const correctIcon='<div class="icon"><i class="fas fa-check"></i></div>'
const incorrectIcon='<div class="icon"><i class="fas fa-times"></i></div>'

 function sualGöster(sual){
   let options="";
   let questions=`<span>${sual.sual}</span>`
    for(let cavab in sual.variantlar){
        options+=
        `
        <div class="option">
        <span><b>${cavab}</b>) ${sual.variantlar[cavab]}</span>
       </div>

        `
    }
    document.querySelector(".next_btn").classList.remove("show")
    document.querySelector(".question_text").innerHTML=questions;
    option_list.innerHTML=options
    const option=option_list.querySelectorAll(".option")
   
    for(let opt of option){
       opt.setAttribute("onclick", "optionSelected(this)")
    }
 }

 document.querySelector(".next_btn").addEventListener("click",function(){
    if(quiz.suallar.length != quiz.sualindex){
      sualSayiniGoster(quiz.sualindex+1,quiz.suallar.length)
      document.querySelector(".next_btn").classList.remove("show")
      sualGöster(quiz.sualTerkib())
      quiz.sualindex+=1

    }else{
      console.log("Suallar Bitdi.")
      document.querySelector(".score_box").classList.add("active")
      document.querySelector(".quiz_box").classList.remove("active")
    }
 })


 function optionSelected(option){
   let cavab=option.querySelector("span b").textContent;
   let sual=quiz.sualTerkib()
   if(sual.cavabYoxla(cavab)){
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correctIcon)
   }else{
     option.classList.add("incorrect");
      option.insertAdjacentHTML("beforeend", incorrectIcon)
   }

   for(let i=0; i < option_list.children.length; i++){
     option_list.children[i].classList.add("disabled")
   }
   document.querySelector(".next_btn").classList.add("show")
 }
function sualSayiniGoster(sualSirasi,toplamSual){
  let tag=`<span class="badge">${sualSirasi}/${toplamSual}</span>`;
  document.querySelector(".quiz_box .questions_index").innerHTML=tag
}


