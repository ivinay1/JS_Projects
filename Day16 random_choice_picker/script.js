var input = document.querySelector("#ta");
var output = document.querySelector(".output");

input.addEventListener("keyup",function(e){

    createtags(e.target.value);

    if(e.key === 'Enter')
    {
        // it will clear the screen after 10ms after user enters "enter"
        setTimeout(() => {      
            e.target.value = '';
        }, 10);

        // flashing-effect:- highlight and unhighlight 
        flashing();
    }

})

function createtags(input)
{
    const tags = input.split(',').filter((elem)=>{elem.trim !== ''}).map((elem) => { elem.trim()}); 
    // converted them into arrray in basis of ',' and cleaning it

    tags.forEach(tag => {
        let tagEl = document.createElement('span');
        tagEl.classList.add('tag')
        tagEl.innerText = tag;
        output.appendChild(tagEl);
    });

}

function flashing()
{

    const interval = setInterval(() => {
        
        const RandomTag = pickRandomTag();
        
        if( RandomTag !== undefined)
        {
            highlightTag(RandomTag);
        }
    
        setTimeout(() => {
            unHighlightTag(RandomTag);
        }, 100);

    }, 100);

    setTimeout(() =>{
        clearInterval(interval)

        setTimeout(() =>{
            const RandomTag = pickRandomTag();
            highlightTag(RandomTag);
        },100)

    },100*times)
}


function pickRandomTag()
{
    const temp = document.querySelectorAll('.tag');
    return temp[[Math.floor(Math.random() * temp.length)]];
}