const slideImage = document.querySelectorAll('.slide__image');
let SlideIndex = 0

window.addEventListener("mousemove",(e)=>{

    x = e.offsetX;
    y = e.offsetY;
    slideImage[SlideIndex].style.transform = `translate(${-x/20}px, ${-y/20}px)`;
})