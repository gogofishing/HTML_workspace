var slideIndex = 1;
showSlides(slideIndex);
var timer;

function pluseSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log("n:" + n);
    console.log("slideIndex:" + slideIndex);
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");


    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }


    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    timer = setTimeout("showSlides(slideIndex++)", 2000); // 切换时间为 2 秒
}