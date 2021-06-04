'use strict'
const cart = document.querySelector(".cart");
document.querySelector(".cart").addEventListener(`click`, openModal)
let cartValue = document.querySelector(".cart-value");
let value = 1;
let cartBuy = [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0]
];

function openCart(event) {
    const element = event.target;
    const id = element.dataset.id;
    cart.style.display = "flex";
    cartValue.innerHTML++
        if (cartValue.innerHTML >= 10) {
            cartValue.innerHTML = '+' + 9
        }
    for (let i = 0; i < cartBuy.length; i++) {
        if (cartBuy[i][0] === id * 1) {
            cartBuy[i][1]++;
        }
    }
}

function openModal() {
    document.querySelector(`.modal`).style.display = "flex";
}