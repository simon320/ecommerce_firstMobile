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
