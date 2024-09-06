var boxes = document.querySelectorAll(".b");

window.addEventListener("scroll",slideOnScroll);

slideOnScroll();

function slideOnScroll()
{
    const triggerBottom = window.innerHeight/5*4;  // height of the dsplay which is currently displaying

    boxes.forEach(function(box){

        const topDist = box.getBoundingClientRect().top;

        if( triggerBottom > topDist)
        {
            box.classlist.add("show");
        }
        else
        {
            box.classlist.remove("show");
        }
    })

}