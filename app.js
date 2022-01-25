function runnerin() {
    document.querySelector('.line').style.cssText = "width: 34vw; transition: 1s";
    document.querySelector('.wear').style.cssText = "opacity: 1; transition: 1s";
}

function runnerout() {
    document.querySelector('.line').style.cssText = "width: 0vw; transition: 0.6s";
    document.querySelector('.wear').style.cssText = "opacity: 0; transition: 0.6s";
}

var slideIndex = 0;

function shoeSlides() {
    var i;
    var slides = document.getElementsByClassName("image");
    var circle = document.getElementsByClassName("circle");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.cssText = "opacity: 1; transition: 0.5s; display: none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(shoeSlides, 2000);
}

function jogin() {
    document.querySelector('.jogging').style.cssText = "box-shadow: 0px 0px 1px black; backdrop-filter: blur(15px); transition:0.3s;";
    document.querySelector('.imagej').style.cssText = "height: 45vh; width: 30vw; border-bottom-left-radius: 75%; position: absolute; transition: 0.3s ease-in-out;";
    document.querySelector('.sizes').style.cssText = "margin-top:50vh; transition:0.3s ease-in-out; transition-delay: 0.3s;";
    document.querySelector('.size_txt').style.cssText = "color: white;";
    document.querySelector('.runner').style.cssText = "color: white;";
    document.querySelector('.colors').style.cssText = "margin-top:2vh; transition:0.3s ease-in-out; transition-delay: 0.6s; color: white";
    document.querySelector('.exclusive').style.cssText = "margin-top:2vh; transition:0.3s ease-in-out; transition-delay: 0.9s;";
    document.querySelector('.jogging-heading').style.cssText = "margin-left: -30vw; transition: 0.3s ease-in-out;";
    document.querySelector('.jogging-para').style.cssText = "margin-top: 2vh; transition: 0.3s ease-in-out;";
    document.querySelector('.shape1').style.cssText = " margin-left: 20vw; width: 70vw; height: 70vw; transition: 0.3s ease-in-out; transform: rotate(30deg);";
}

function jogout() {
    document.querySelector('.shape1').style.cssText = " margin-left: 0vw; width: 45vw; height: 45vw; transition: 0.3s ease-in-out; transform: rotate(0deg);";
    document.querySelector('.jogging-para').style.cssText = "margin-top: 0vh; transition: 0.3s ease-in-out;";
    document.querySelector('.jogging-heading').style.cssText = "margin-left: -50vw; transition: 0.3s ease-in-out;";
    document.querySelector('.exclusive').style.cssText = "margin-top:2vh; transition:0.3s ease-in-out;";
    document.querySelector('.colors').style.cssText = "margin-top:25vh; transition:0.3s ease-in-out;";
    document.querySelector('.sizes').style.cssText = "margin-top:80vh transition:0.3s ease-in-out;";
    document.querySelector('.imagej').style.cssText = "height: 80vh; width: 30vw; transition: 0.3s;";
    document.querySelector('.jogging').style.cssText = "box-shadow: 0px 0px 5px black; transition:0.3s;";
}


function scrollin() {
    document.querySelector('.scroll_box').style.cssText = "transform: rotate(360deg); transition: 0.3s; border-color: white; background-color:black;";
    document.querySelector('.scroll_pointer').style.cssText = "background-color: white";
}

function scrollout() {
    document.querySelector('.scroll_box').style.cssText = "transform: rotate(0deg); transition: 0.3s; border-color: black; background-color: white;";
    document.querySelector('.scroll_pointer').style.cssText = "background-color: black";
}

shoeSlides();