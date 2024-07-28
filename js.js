const slide = document.querySelectorAll('.slide img');
let slideIndex = 1;
let intervalId = null;
document.addEventListener("DOMContentLoaded", initializeSlides);
function initializeSlides(){
    if(slide.length > 0){
        slide[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 3000);
    }   
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}    
function showSlide(index){
    if(index >= slide.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slide.length - 1;
    }

    slide.forEach(slide =>{
        slide.classList.remove('displaySlide');
    })
    slide[slideIndex].classList.add('displaySlide');
}


function currentSlide(n) {  
    clearInterval(intervalId);
    showSlide(slideIndex = n);
}

