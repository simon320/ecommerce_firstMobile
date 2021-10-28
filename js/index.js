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
const arrowPrev = document.getElementById("arrow-prev");
const arrowNext = document.getElementById("arrow-next");
const containerCarousel = document.getElementById("container-carousel");


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
let ghostEffect = document.querySelectorAll(".effect");

function showScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (let i=0; i<ghostEffect.length; i++){
        let topAnimated = ghostEffect[i].offsetTop;
        if(topAnimated - 500 < scrollTop){
            ghostEffect[i].style.opacity = 1;
            if((i % 2) == 0){
                ghostEffect[i].classList.add("animatedLeft");
            } else{
                ghostEffect[i].classList.add("animatedRight");
            }
        }
    }
}

window.addEventListener('scroll', showScroll);


// Login
const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const nameUser = document.getElementsByClassName("name");
const terms = document.getElementById("terms");
const buttons = document.getElementsByClassName("buttons");
const containerInput = document.getElementsByClassName("container-input");
const login = document.getElementsByClassName("login");
let signUpClick = 1;
let signInClick = 0;

signUp.style.borderBottom = "2px solid #e7ba52";
buttons[1].style.display = "none"; 

signIn.onclick = function() {
    if(signInClick == 0)
    {
        signIn.style.borderBottom = "2px solid #e7ba52"
        buttons[1].style.display = "block"; 
        containerInput[0].style.justifyContent = "flex-start";
        login[0].style.background = "rgba(30,75,79,1)";
        signInClick = 1;

        signUp.style.borderBottom = "none";
        nameUser[0].style.display = "none";
        nameUser[1].style.display = "none";
        terms.style.display = "none"
        buttons[0].style.display = "none"; 
        signUpClick = 0;
    }
}

signUp.onclick = function() {
    if(signUpClick == 0)
    {
        signIn.style.borderBottom = "none"
        buttons[1].style.display = "none"; 
        containerInput[0].style.justifyContent = "space-evenly";
        signInClick = 0;
        
        signUp.style.borderBottom = "2px solid #e7ba52";
        nameUser[0].style.display = "block";
        nameUser[1].style.display = "block";
        terms.style.display = "flex"
        buttons[0].style.display = "block"; 
        login[0].style.background = "rgba(30,75,69,1)";
        signUpClick = 1;
    }
}