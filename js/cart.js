// Clean Button (cart.html)
const cleanButton = document.getElementById("cleanButton");
const containerItems = document.getElementById("containerItems");
let totalPrice = document.getElementById("totalPrice");


cleanButton.addEventListener('click', function(){removeAll(containerItems, totalPrice)}, false);

function removeAll(newElement1, newElement2) {
    newElement1.innerHTML = '<div class="container-empty"><h3>No tienes productos en tu carrito..</h3></div>';
    newElement2.innerHTML = "$0.00";
}



// Remove Button (cart.html)
const removeItemButton = document.getElementsByClassName("remove-item");
let itemCart = document.getElementsByClassName("item-cart");



    for (let i=0; i<itemCart.length; i++){
        removeItemButton[i].onclick = () => {
            if(itemCart.length > 1){
                itemCart[i].remove();
                i = 0;
            } else {
                removeAll(containerItems, totalPrice);
            }
            priceCalculator();
        }
    }




// Items Amount & Total Price(cart.html)
const itemsAmount = document.getElementsByClassName("items-amount");
const subtractAmount = document.getElementsByClassName("subtractAmount");
const addAmount = document.getElementsByClassName("addAmount");
const amount = document.getElementsByClassName("amount");
const price = document.getElementsByClassName("price");
let priceAccumulated;

function priceCalculator() {
    priceAccumulated = 0;
    for(let i=0; i<price.length; i++){
        priceAccumulated += (parseInt(price[i].textContent.slice(1)) * parseInt(amount[i].textContent));
    }
    totalPrice.innerHTML = "$" + priceAccumulated + ".00";
}

priceCalculator();

for (let i=0; i<amount.length; i++){
    subtractAmount[i].onclick = () => {
        amount[i].textContent > 1 && (amount[i].textContent = parseInt(amount[i].textContent) - 1);
        priceCalculator()
    }
    addAmount[i].onclick = () => {
        amount[i].textContent = parseInt(amount[i].textContent) + 1;
        priceCalculator()
    }
}






