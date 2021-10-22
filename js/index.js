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
const heart = document.getElementById("heart");
const heartFill = document.getElementById("heartFill");
const divLike = document.getElementsByClassName("like");

heart.style.display = "block";
heartFill.style.display = "none";

divLike.onclick = function liked() {
    if (heart.style.display == "block")
    {
        heart.style.display == "none";
        heartFill.style.display == "block";
    }
}

