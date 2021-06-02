

function toggleSlides(){
    let slides=document.getElementsByClassName("slide");

    for(let i=0;i<slides.length;i++)
    {
        if(slides[i].classList.contains("visible")==true)
        {
            slides[i].classList.remove("visible");
            slides[i].classList.add("hidden");
        }
        else{
            slides[i].classList.remove("hidden");
            slides[i].classList.add("visible");
        }
    }
}