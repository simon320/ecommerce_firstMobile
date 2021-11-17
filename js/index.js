// Menu mobile
const menuBurger = document.getElementById("menuBurger");
const menuIcon = document.getElementById("menuIcon");
const bar = document.getElementsByClassName("bar");
const imgHand = document.getElementById("imgHand");


menuIcon.onclick = function menuToggle() {
    if (menuBurger.style.maxWidth == "0px") 
    {
        bar[0].style.transform = "rotate(-45deg) translateY(0) translateX(0)";
        bar[1].style.opacity = "0";
        bar[2].style.transform = "rotate(45deg) translateY(0) translateX(0)";
        imgHand.style.left = "50px";
        imgHand.style.filter = "blur(1px)";
        menuBurger.style.maxWidth = "100%";

    } 
    else 
    {
        bar[0].style.transform = "rotate(0deg) translateY(0) translateX(0)";
        bar[1].style.opacity = "1";
        bar[2].style.transform = "rotate(0deg) translateY(0) translateX(0)";
        imgHand.style.left = "0";
        imgHand.style.filter = "blur(0px)";
        menuBurger.style.maxWidth = "0";
    }
}


// Shop select(product)
const shopOption = document.getElementsByClassName("shop-option");
const containerProduct = document.getElementById("containerProduct");
let option1 = 1; 
let option2 = 0; 
let option3 = 0; 
shopOption[0].style.cursor = "default";
shopOption[0].style.border = "2px solid #000";
shopOption[1].style.cursor = "pointer";
shopOption[2].style.cursor = "pointer";

shopOption[0].onclick = function(){
    if(option1 === 0 && option2 === 1){
        shopOption[0].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[0].style.transform = "scale(1.2)";
        shopOption[0].style.background = "rgb(80, 182, 80)";
        shopOption[0].style.zIndex = "100";
        shopOption[0].style.border = "2px solid #000";
        shopOption[0].style.cursor = "default";   

        shopOption[1].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[1].classList.add("animated-moveRight");
        shopOption[1].style.transform = "scale(1.1)";
        shopOption[1].style.background = "rgb(52, 124, 52)";
        shopOption[1].style.zIndex = "50";
        shopOption[1].style.border = "none";
        shopOption[1].style.cursor = "pointer";
        
        shopOption[2].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[2].style.transform = "scale(1)"
        shopOption[2].style.background = "rgb(38, 87, 38)";
        shopOption[2].style.zIndex = "0";
        shopOption[2].style.border = "none";
        shopOption[2].style.cursor = "pointer";

        option1 = 1;
        option2 = 0;
        option3 = 0;
        containerProduct.style.left = "0";
    }
    else if(option1 === 0 && option3 === 1) {
        shopOption[0].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[0].style.transform = "scale(1.2)";
        shopOption[0].style.background = "rgb(80, 182, 80)";
        shopOption[0].style.zIndex = "100";
        shopOption[0].style.border = "2px solid #000";
        shopOption[0].style.cursor = "default";
        
        shopOption[1].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[1].classList.add("animated-moveRight");
        shopOption[1].style.transform = "scale(1.1)";
        shopOption[1].style.background = "rgb(52, 124, 52)";
        shopOption[1].style.zIndex = "50";
        shopOption[1].style.border = "none";
        shopOption[1].style.cursor = "pointer";
        
        shopOption[2].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[2].classList.add("animated-moveRight");
        shopOption[2].style.transform = "scale(1)";
        shopOption[2].style.background = "rgb(38, 87, 38)";
        shopOption[2].style.zIndex = "0";
        shopOption[2].style.border = "none";
        shopOption[2].style.cursor = "pointer";

        option1 = 1;
        option2 = 0;
        option3 = 0;
        containerProduct.style.left = "0";
    }
}
    
shopOption[1].onclick = function(){
    if(option2 === 0 && option1 === 1){
        shopOption[0].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[0].classList.add("animated-moveLeft");
        shopOption[0].style.transform = "scale(1.1)";
        shopOption[0].style.background = "rgb(52, 124, 52)";
        shopOption[0].style.zIndex = "50";
        shopOption[0].style.border = "none";
        shopOption[0].style.cursor = "pointer";
        
        shopOption[1].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[1].style.transform = "scale(1.2)";
        shopOption[1].style.background = "rgb(80, 182, 80)";
        shopOption[1].style.zIndex = "100";
        shopOption[1].style.border = "2px solid #000";
        shopOption[1].style.cursor = "default";
        
        shopOption[2].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[2].style.transform = "scale(1.1)"
        shopOption[2].style.background = "rgb(52, 124, 52)";
        shopOption[2].style.zIndex = "50";
        shopOption[2].style.border = "none";
        shopOption[2].style.cursor = "pointer";

        option1 = 0;
        option2 = 1;
        option3 = 0;
        containerProduct.style.left = "-100%";
    }
    else if(option2 === 0 && option3 === 1){
        shopOption[0].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[0].style.transform = "scale(1.1)";
        shopOption[0].style.background = "rgb(52, 124, 52)";
        shopOption[0].style.zIndex = "50";
        shopOption[0].style.border = "none";
        shopOption[0].style.cursor = "pointer";
        
        shopOption[1].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[1].style.transform = "scale(1.2)";
        shopOption[1].style.background = "rgb(80, 182, 80)";
        shopOption[1].style.zIndex = "100";
        shopOption[1].style.border = "2px solid #000";
        shopOption[1].style.cursor = "default";
        
        shopOption[2].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[2].classList.add("animated-moveRight");
        shopOption[2].style.transform = "scale(1.1)"
        shopOption[2].style.background = "rgb(52, 124, 52)";
        shopOption[2].style.zIndex = "50";
        shopOption[2].style.border = "none";
        shopOption[2].style.cursor = "pointer";

        option1 = 0;
        option2 = 1;
        option3 = 0;
        containerProduct.style.left = "-100%";
    }
}

shopOption[2].onclick = function(){
    if(option3 === 0 && option1 === 1){
        shopOption[0].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[0].classList.add("animated-moveLeft");
        shopOption[0].style.background = "rgb(38, 87, 38)";
        shopOption[0].style.transform = "scale(1)";
        shopOption[0].style.zIndex = "0";
        shopOption[0].style.border = "none";
        shopOption[0].style.cursor = "pointer";
        
        shopOption[1].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[1].classList.add("animated-moveLeft");
        shopOption[1].style.transform = "scale(1.1)";
        shopOption[1].style.background = "rgb(52, 124, 52)";
        shopOption[1].style.zIndex = "50";
        shopOption[1].style.border = "none";
        shopOption[1].style.cursor = "pointer";
        
        shopOption[2].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[2].style.transform = "scale(1.2)"
        shopOption[2].style.background = "rgb(80, 182, 80)";
        shopOption[2].style.zIndex = "100";
        shopOption[2].style.border = "2px solid #000";
        shopOption[2].style.cursor = "default";

        option1 = 0;
        option2 = 0;
        option3 = 1;
        containerProduct.style.left = "-200%";
    } 
    else if(option3 === 0 && option2 === 1){
        shopOption[0].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[0].style.transform = "scale(1)";
        shopOption[0].style.background = "rgb(38, 87, 38)";
        shopOption[0].style.zIndex = "0";
        shopOption[0].style.border = "none";
        shopOption[0].style.cursor = "pointer";
        
        shopOption[1].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[1].classList.add("animated-moveLeft");
        shopOption[1].style.transform = "scale(1.1)";
        shopOption[1].style.background = "rgb(52, 124, 52)";
        shopOption[1].style.zIndex = "50";
        shopOption[1].style.border = "none";
        shopOption[1].style.cursor = "pointer";
        
        shopOption[2].classList.remove("animated-moveRight", "animated-moveLeft");
        shopOption[2].style.transform = "scale(1.2)"
        shopOption[2].style.background = "rgb(80, 182, 80)";
        shopOption[2].style.zIndex = "100";
        shopOption[2].style.border = "2px solid #000";
        shopOption[2].style.cursor = "default";

        option1 = 0;
        option2 = 0;
        option3 = 1;
        containerProduct.style.left = "-200%";
    }
}
// Carousel
const arrowPrev = document.getElementById("arrow-prev");
const arrowNext = document.getElementById("arrow-next");
const containerCarousel = document.getElementById("container-carousel");


arrowNext.onclick = function() {
    if (containerCarousel.style.left == "0%")
    {
        containerCarousel.style.left = "-100%";
    }
    else if (containerCarousel.style.left == "-100%")
    {
        containerCarousel.style.left = "-200%";
    }
    else 
    {
        containerCarousel.style.left = "0%";
    }
} 

arrowPrev.onclick = function() {
    if (containerCarousel.style.left == "0%")
    {
        containerCarousel.style.left = "-200%";
    }
    else if (containerCarousel.style.left == "-200%")
    {
        containerCarousel.style.left = "-100%";
    }
    else 
    {
        containerCarousel.style.left = "0%";
    }
} 



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
signIn.style.cursor = "pointer";
buttons[1].style.display = "none"; 

signIn.onclick = function() {
    if(signInClick == 0)
    {
        signIn.style.borderBottom = "2px solid #e7ba52"
        signIn.style.cursor = "default";
        buttons[1].style.display = "block"; 
        containerInput[0].style.justifyContent = "flex-start";
        signInClick = 1;

        signUp.style.borderBottom = "none";
        signUp.style.cursor = "pointer";
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
        signIn.style.cursor = "pointer";
        signInClick = 0;
        
        signUp.style.borderBottom = "2px solid #e7ba52";
        signUp.style.cursor = "default";
        nameUser[0].style.display = "block";
        nameUser[1].style.display = "block";
        terms.style.display = "flex"
        buttons[0].style.display = "block"; 
        signUpClick = 1;
    }
}

// Icon like(product)
let heart = document.getElementsByClassName("bi-heart");
let heartFill = document.getElementsByClassName("bi-heart-fill");
let divLike = document.getElementsByClassName("like");


for (let i=0; i<25; i++) {
    heart[i].style.display = "block";
    heartFill[i].style.opacity = "0";
    divLike[i].onclick = function () {
        if (heart[i].style.display == "block") 
        {
            heart[i].style.display = "none";
            heartFill[i].classList.remove("animated-dontLikeHeart");
            heartFill[i].classList.add("animated-likeHeart");
        }
        else 
        {
            heart[i].style.display = "block";
            heartFill[i].classList.remove("animated-likeHeart");
            heartFill[i].classList.add("animated-dontLikeHeart");
        }
    }
}
