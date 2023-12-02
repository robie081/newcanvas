

function openNav() {
    // document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
// document.getElementById("myNav").style.height = "0%";
document.getElementById("myNav").style.width = "0%";
}


let index = 1;
myShow(index);

function currentSlide(n) {
    myShow(index = n);
}

function myShow(n) {
    console.log(`n ${n}`);
    console.log(`index ${index}`);
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activation", "");
    }
    dots[index - 1].className += " activation";
}

