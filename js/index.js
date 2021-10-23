//Menu mobile
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

//Icon like
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