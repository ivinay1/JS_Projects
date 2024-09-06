var open = document.querySelector(".open");
var close = document.querySelector(".close");
var container = document.querySelector(".container");

open.addEventListener("click",()=>{
    container.classList.add("ShowNav");
})

close.addEventListener("click",()=>{
    container.classList.remove("ShowNav");
})

console.log(open);
console.log(close);
console.log(container);