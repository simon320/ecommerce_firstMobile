// Clean Button (cart.html)
const cleanButton = document.getElementById("cleanButton");
const containerItems = document.getElementById("containerItems");
let totalPrice = document.getElementById("totalPrice");


cleanButton.onclick = function removeAll() {
    containerItems.innerHTML = '<div class="container-empty"><h3>No tienes productos en tu carrito..</h3></div>';
    totalPrice.innerHTML = "$0.00";
}



// Remove Button (cart.html)
const removeItem = document.getElementsByClassName("remove-item");
const itemCart = document.getElementsByClassName("item-cart");

for (let i=0; i<itemCart.length; i++){
    removeItem[i].onclick = () => {
        if(containerItems.length > 1){
            itemCart[i].remove();
        } 
    }
}


// Items Amount (cart.html)
const itemsAmount = document.getElementsByClassName("items-amount");
const subtractAmount = document.getElementsByClassName("subtractAmount");
const addAmount = document.getElementsByClassName("addAmount");
const amount = document.getElementsByClassName("amount");


for (let i=0; i<amount.length; i++){
    subtractAmount[i].onclick = () => {
        amount[i].textContent > 1 && (amount[i].textContent = parseInt(amount[i].textContent) - 1);
    }
    addAmount[i].onclick = () => {
        amount[i].textContent = parseInt(amount[i].textContent) + 1;
    }
}