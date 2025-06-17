const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    const target = document.querySelector(tab.dataset.tabTarget);
    target.classList.add("active");
  });
});


var slideIndex = 1;
showSlides(slideIndex);
var a;
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

window.onload= function () {
  setInterval(function(){
     plusSlides(1);
  }, 4000);
 }
