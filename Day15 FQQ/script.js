var box = document.querySelectorAll(".faq-box");
var icons = document.querySelectorAll("i");
var ans = document.querySelectorAll('.container.faq-box.box p')

console.log(ans);

var con = 1; // true



icons.forEach(function(icon){


    icon.addEventListener("click",function(e){

        let box = icon.parentElement.parentElement;
        let para = icon.parentElement.nextElementSibling;

        console.log(para);

        if(con)
        {
            e.target.classList.add('fa');
            e.target.classList.add('fa-times');
            e.target.classList.remove('fa-solid', 'fa-caret-down');
            con = 0;
            box.style.height = "9rem";
            para.style.display = "block";
            box.classList.add('img');
        }
        else
        {
            e.target.classList.add('fa-solid', 'fa-caret-down');
            e.target.classList.remove('fa');
            e.target.classList.remove('fa-times');
            con = 1;
            box.style.height = "6rem";
            para.style.display = "none";
            box.classList.remove('img');
        }
     




    })

})





