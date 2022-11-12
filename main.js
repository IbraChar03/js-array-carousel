let arrayimg=["img/01.webp", "img/02.webp","img/03.webp","img/04.webp","img/05.webp"]
let i = 0;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 let slide = document.getElementById("slide");

 slide.src = arrayimg[i];

 next.addEventListener("click",
   function(){
     i++;
   if (i > arrayimg.length - 1) {
    i = 0;
    }
    slide.src = arrayimg[i];
  }

 );


 prev.addEventListener("click",
 function(){
  i--;
if (i < 0) {
  i = arrayimg.length - 1;
}
slide.src = arrayimg[i];
}

);




