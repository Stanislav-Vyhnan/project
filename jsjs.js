let products;
let elementId = 1;
let startElementId = 1;

function renderProducts(products) {
    for (const product of products) {
        let productsContainer = document.querySelector(`#slide-${elementId}`);
        productsContainer.innerHTML = "";
        productsContainer.innerHTML += `
            <img src="${product.imgUrl}" id="${product.id}" alt="${product.description}">
            <h5>${product.title}</h5>
            <p class="price">${product.price}</p>
            <div class="carousel-items-element-pin">Add to cart</div>`;

        elementId >= 4 ?
            (elementId = 1) :
            elementId <= 0 ?
            (elementId = 1) :
            elementId++;

    }
}
document.querySelectorAll('carousel-items-element-pin').forEach(cartPinOpen => cartPinOpen.addEventListener('click', openCart));
async function fetchProducts() {
    const response = await fetch("products.json");
    products = await response.json();
    renderProducts(products);
}
fetchProducts();

const carslBack = document.querySelector(".carousel-element-back");
const carslForward = document.querySelector(".carousel-element-forward");

carslBack.addEventListener("click", prevSlide);

function prevSlide() {
    startElementId--;
    if (startElementId <= 0) startElementId = 4;
    elementId = startElementId;
    renderProducts(products);
}

carslForward.addEventListener("click", nextSlide);

function nextSlide() {
    startElementId++;
    if (startElementId >= 5) startElementId = 1;
    elementId = startElementId;
    renderProducts(products);
}



const cart = document.querySelector(".cart");
let cartValue = document.querySelector(".cart-value");
let i = 0;

function openCart() {
    i++;
    cartValue.innerHTML = i;
    cart.style.display = "flex";
    if (i >= 10) {
        i = 9;
        cartValue.innerHTML = i + "+";
    }
}