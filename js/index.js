// Menu mobile
const menuList = document.getElementById("menuList");
const menuIcon = document.getElementById("menuIcon");

menuList.style.maxWidth = "0px";

menuIcon.onclick = function menuToggle() {
    if (menuList.style.maxWidth == "0px") 
    {
        menuList.style.maxWidth = "180px";
    } 
    else 
    {
        menuList.style.maxWidth = "0px";
    }
};

// Icon like
let heart = document.getElementsByClassName("bi-heart");
let heartFill = document.getElementsByClassName("bi-heart-fill");
let divLike = document.getElementsByClassName("like");


for (let i=0; i<8; i++) {
    heart[i].style.display = "block";
    heartFill[i].style.display = "none";
    divLike[i].onclick = function () {
        if (heart[i].style.display == "block") 
        {
            heart[i].style.display = "none";
            heartFill[i].style.display = "block";
        }
        else 
        {
            heart[i].style.display = "block";
            heartFill[i].style.display = "none";
        }
    }
}

// Carousel
let arrowPrev = document.getElementById("arrow-prev");
let arrowNext = document.getElementById("arrow-next");
let containerCarousel = document.getElementById("container-carousel");


arrowNext.onclick = function() {
    if (containerCarousel.style.left == "0%")
    {
        containerCarousel.style.left = "-100%"
    }
    else if (containerCarousel.style.left == "-100%")
    {
        containerCarousel.style.left = "-200%"
    }
    else 
    {
        containerCarousel.style.left = "0%"
    }
} 

arrowPrev.onclick = function() {
    if (containerCarousel.style.left == "0%")
    {
        containerCarousel.style.left = "-200%"
    }
    else if (containerCarousel.style.left == "-200%")
    {
        containerCarousel.style.left = "-100%"
    }
    else 
    {
        containerCarousel.style.left = "0%"
    }
} 

// Ghost Effect
let ghostEffect = document.querySelectorAll(".ghost-effect");

function showScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i=0; i<ghostEffect.length; i++){
        let topAnimated = ghostEffect[i].offsetTop;
        if(topAnimated - 500 < scrollTop){
            ghostEffect[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', showScroll);