'use strict'
const cart = document.querySelector(".cart");
let cartValue = document.querySelector(".cart-value");
let value = 1;
let cartBuy = {};

function openCart(event) {
    const element = event.target;
    const id = element.dataset.id;
    cart.style.display = "flex";
    cartValue.innerHTML++
        if (cartValue.innerHTML >= 10) {
            cartValue.innerHTML = '+' + 9
        }

    console.log(typeof(id))

}