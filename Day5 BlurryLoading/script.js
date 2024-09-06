
var blurDivs = document.querySelectorAll(".blurred-img");

blurDivs.forEach(function(Div){

    const img = Div.querySelector("img"); //Divko root element mann ke uska component img nikal liya

    //yeh function image load kaise karega ek class add krke jo dekhegi ki image visible krni hai ya nhai using opacity
    function loaded()
    {
        Div.classList.add("loaded");
    }

    if(img.complete) // complete is a property which check whether object is fully loaded or not
    {
        loaded();
    }
    else
    {
        img.addEventListener("load",loaded); // agar image load nahi hui toh yeh event listener laga diya hai Div pr jo tabh trigger hoga jab image fully load ho jayegi
        // jo load hoga uspe lagana hai event
    }
})