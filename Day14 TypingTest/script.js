var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
var textArea = document.querySelector("#ta");

var incorrect = document.querySelector("#wt");
var correct = document.querySelector("#cw");
var accuracy = document.querySelector("#accuracy");

var startTime = 0;
var endTime = 0;

var con = true;

// console.log(btn);
// console.log(content);
// console.log(textArea);
// console.log(incorrect);
// console.log(correct);
// console.log(accuracy);

textArea.disabled = true;

btn.addEventListener("click",function(e){

    if(con)
    {
        textArea.disabled = !textArea.disabled; // will enable and disable the button i.e.., produce toggling effect
        generateQuote(); // will generate random quote for typing
        TimerStart();  // initialise the startTime with the current Time
        Results.vanish(); // will clear results from span
        btn.innerText = "Done";
        con = false;
    }
    else
    {
        TimerEnd(); // initialise the startTime with the end Time
        content.innerText = "Click on the start button for starting the Typing Test!!!";
        textArea.disabled = !textArea.disabled; 
        btn.innerText = "Start";
        calculateResult();
    }
})

function generateQuote()
{
    
}









