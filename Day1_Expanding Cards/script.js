var panels = document.querySelectorAll(".panel");

console.log(panels);

panels.forEach(function(panel){

    panel.addEventListener("mouseover",function(e){

        e.target.textContent = "vinay tera baap!!!";
        e.target.style.color = "white";

    })

    panel.addEventListener("mouseout",function(e){
        e.target.textContent = "";
    })


})