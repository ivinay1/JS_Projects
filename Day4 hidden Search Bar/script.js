var searchbar = document.querySelector(".container");
var searchBtn = document.querySelector(".search");
var cancelBtn = document.querySelector(".cancel");
var inputField = document.querySelector(".bar"); 

searchBtn.addEventListener("click",function(){
    searchbar.classList.add("active");
    inputField.focus();
})

cancelBtn.addEventListener("click",function(){
    searchbar.classList.remove("active");
})


