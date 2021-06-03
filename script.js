let productsCarousel;
let products;
let elementId = 1;
let startElementId = 1;

function renderProductsCarousel(productsCarousel) {
    for (const product of productsCarousel) {
        let productsCarouselContainer = document.querySelector(`#slide-${elementId}`);
        productsCarouselContainer.innerHTML = "";
        productsCarouselContainer.innerHTML += `
            <img src="${product.imgUrl}" id="${product.id}" alt="${product.description}">
            <h4>${product.title}</h4>
            <p class="price">${product.price}</p>
            <div class="carousel-items-element-pin" data-id="${product.id}">Add to cart</div>`;

        elementId >= 4 ?
            (elementId = 1) :
            elementId <= 0 ?
            (elementId = 1) :
            elementId++;

    }
    document.querySelectorAll('carousel-items-element-pin').forEach(cartPinOpen => cartPinOpen.addEventListener('click', openCart));
}



function renderProducts(products) {
    let productsContainer = document.querySelector(`.page-sixth-items-wines`);
    productsContainer.innerHTML = "";
    for (const product of products) {
        productsContainer.innerHTML += `
        <div class="page-sixth-items-wines-element">
            <img src="${product.imgUrl}" alt="${product.description}">
            <h4>${product.title}</h4>
            <p class="price">${product.price}</p>
            <div class="carousel-items-element-pin" data-id="${product.id}">Add to cart</div>
        </div>`;
    }
    document.querySelectorAll('.carousel-items-element-pin').forEach(cartPinOpen => cartPinOpen.addEventListener('click', openCart));
}



const carslBack = document.querySelector(".carousel-element-back");
const carslForward = document.querySelector(".carousel-element-forward");

carslBack.addEventListener("click", prevSlide);

function prevSlide() {
    startElementId--;
    if (startElementId <= 0) startElementId = 4;
    elementId = startElementId;
    renderProductsCarousel(productsCarousel);
}

carslForward.addEventListener("click", nextSlide);

function nextSlide() {
    startElementId++;
    if (startElementId >= 5) startElementId = 1;
    elementId = startElementId;
    renderProductsCarousel(productsCarousel);
}

async function fetchProductsCarousel() {
    const response = await fetch("products-carousel.json");
    productsCarousel = await response.json();
    renderProductsCarousel(productsCarousel);
}
fetchProductsCarousel();



async function fetchProducts() {
    const response = await fetch("products-page-sixth.json");
    products = await response.json();
    renderProducts(products);
}
fetchProducts();