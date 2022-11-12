let arrayimg=["img/01.webp", "img/02.webp","img/03.webp","img/04.webp","img/05.webp"]
let i = 0;
let main=document.querySelector("main");
let container=document.createElement("div");
container.classList.add("container");
main.append(container);
let slider=document.createElement("div");
slider.classList.add("slider");
container.append(slider);
let item=document.createElement("div");
item.classList.add("item");
slider.append(item);
 let img=document.createElement("img");
 img.classList.add("img-size");
 item.append(img)
 img.src = arrayimg[i];
 let next=document.createElement("div");
 next.classList.add("next");
 next.classList.add("fa-solid");
 next.classList.add("fa-angle-up");
 slider.append(next);
 let prev=document.createElement("div");
 prev.classList.add("prev");
 prev.classList.add("fa-solid");
 prev.classList.add("fa-angle-down");
 slider.append(prev);

 next.addEventListener("click",
   function(){
     i++;
   if (i > arrayimg.length - 1) {
    i = 0;
    }
    img.src = arrayimg[i];

   }
 );


 prev.addEventListener("click",
 function(){
  i--;
if (i < 0) {
  i = arrayimg.length - 1;
}
img.src = arrayimg[i];
}

);



