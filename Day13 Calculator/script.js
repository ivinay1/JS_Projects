var input = document.querySelector(".user-input");
var buttons = document.querySelectorAll("button");

let ans = ""; //It will hold the answer

buttons.forEach(function(button){

    button.addEventListener("click",function(e){

        if(e.target.innerHTML === "=")
        {
            ans = eval(ans); // It will evaluate whatever present inside the ans string as integer and calculate it

            input.innerText = ans;
        }
        else if(e.target.innerHTML === "AC")
        {
            ans = "";
            input.innerText = ans;
        }
        else if(e.target.innerHTML === "DEL")
        {
            ans = ans.substring(0,ans.length-1);
            input.innerText = ans;
        }
        else
        {
            ans += e.target.innerHTML;
            input.innerText = ans;
        }

    })

})

