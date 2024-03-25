let slider = document.querySelector(".slider")
let sliderSlide = document.querySelectorAll(".slider__slide")
let sliderDotsLi = document.querySelectorAll(".slider-dots_li")
let textColor = document.querySelectorAll(".slider-h2")

const colorsBack = ["#FF5733", "#69440b", "#61007c", "#377e05", "#47947f"]
const colorsText= ["#352004", "#bb925e ", "#2b6675 ", "#fff ", "#000"]
let checkIndex = 0

function autoPlaySlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)` 
}

function goToSlide(index) {
    checkIndex = index
    autoPlaySlide(checkIndex)
    document.body.style.background = colorsBack[index]
    textColor[index].style.color = colorsText[index]
    
}

function goNextSlide() {
    checkIndex = (checkIndex + 1) % sliderSlide.length
    autoPlaySlide(checkIndex)
}

function goPrevSlide() {
    checkIndex = (checkIndex - 1 + sliderSlide.length) % sliderSlide.length
    autoPlaySlide(checkIndex)
}

for (let i = 0; i < sliderDotsLi.length; i++) {
    sliderDotsLi[i].addEventListener("click", function () {
        goToSlide(i)
    })
}