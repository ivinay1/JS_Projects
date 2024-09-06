var applause = document.querySelector(".applause");
var boo = document.querySelector(".boo");
var gasp = document.querySelector(".gasp");
var tada = document.querySelector(".tada");
var victory = document.querySelector(".victory");
var wrong = document.querySelector(".wrong");

var applause_audio = document.querySelector(".audio-applause");
var boo_audio = document.querySelector(".audio-boo");
var gasp_audio = document.querySelector(".audio-gasp");
var tada_audio = document.querySelector(".audio-tada");
var victory_audio = document.querySelector(".audio-victory");
var wrong_audio = document.querySelector(".audio-wrong")

console.log(applause_audio);

applause.addEventListener("click",function(){
    stop_Audio();
    applause_audio.play();
})

boo.addEventListener("click",function(){
    stop_Audio();
    boo_audio.play();
})

gasp.addEventListener("click",function(){
    stop_Audio();
    gasp_audio.play();
})

tada.addEventListener("click",function(){
    stop_Audio();
    tada_audio.play();
})

victory.addEventListener("click",function(){
    stop_Audio();
    victory_audio.play();
})


wrong.addEventListener("click",function(){
    stop_Audio();
    wrong_audio.play();
})

function stop_Audio()
{
    applause_audio.pause();
    applause_audio.currentTime = 0;
    
    boo_audio.pause();
    boo_audio.currentTime = 0;
   
    gasp_audio.pause();
    gasp_audio.currentTime = 0;
   
    tada_audio.pause();
    tada_audio.currentTime = 0;
   
    victory_audio.pause();
    victory_audio.currentTime = 0;
   
    wrong_audio.pause();
    wrong_audio.currentTime = 0;

}


