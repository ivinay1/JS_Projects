const url = 'https://icanhazdadjoke.com';
// url from where we can get response

var btn = document.querySelector("button");
var jokes = document.querySelector(".jokes");

btn.addEventListener("click",function(e){

    // e.target.innerText = "Get Another Joke";
    generateJoke();

})


async function generateJoke() {

    // defining a request header taaki hamko response json mein hi mile
    const config = {
        headers : {
            Accept : 'application/json',
        },
    }
    
    let response = await fetch(url,config);
    // sending http request alongwith request header to fetch the response and hit the api endpoint from where response will come

    let data = await response.json(); // resolving the second promise

    jokes.innerText = data.joke; // Displaying the joke text from the data

}