var boxes = document.querySelectorAll('.b');
var containerTwo = document.querySelector('.containerTwo');
var containerOne = document.querySelector('.containerOne');


boxes.forEach(function(box){

    box.addEventListener("dragstart",function(e){

        let selected = e.target;

        console.log(selected);

        containerTwo.addEventListener("dragover",function(e){

            e.preventDefault();

        })

        containerTwo.addEventListener("drop",function(e){

            containerTwo.appendChild(selected);
            selected = "";

        })

    })

    })
