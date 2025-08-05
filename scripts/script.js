//image slider
const descriptions = [
  `
    <h1 class="st-slide">Să mori tu că vrei sos?</h1>
  `,
  `
    <h1>Fă-ți poftă, nu scuze</h1>
    <p>Ai venit pentru o felie... și-ai rămas pentru toată tava. Știm, se întâmplă des.</p>
  `,
  `
    <h1>Mâini pricepute, suflet italian</h1>
    <p>Pizza noastră nu vine din congelator, ci din mâinile unor oameni care pun dragoste în fiecare blat. Și un pic de făină pe tot restul.</p>
  `
];
const descriptionBox = document.getElementById("description");
const slides = document.querySelectorAll("#slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
         descriptionBox.innerHTML = descriptions[slideIndex];
        intervalId = setInterval(nextSlide, 10000);
    }  
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
    descriptionBox.innerHTML = descriptions[slideIndex];
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);  
}