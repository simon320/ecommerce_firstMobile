// Icon like(product)
let heart = document.getElementsByClassName("bi-heart");
let heartFill = document.getElementsByClassName("bi-heart-fill");
let divLike = document.getElementsByClassName("like");

heart[0].style.display = "block";
heartFill[0].style.opacity = "0";
divLike[0].onclick = function () {
    if (heart[0].style.display == "block") 
    {
        heart[0].style.display = "none";
        heartFill[0].classList.remove("animated-dontLikeHeart");
        heartFill[0].classList.add("animated-likeHeart");
    }
    else 
    {
        heart[0].style.display = "block";
        heartFill[0].classList.remove("animated-likeHeart");
        heartFill[0].classList.add("animated-dontLikeHeart");
    }
}
