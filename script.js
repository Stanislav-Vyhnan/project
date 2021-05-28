let products;
let elementId = 1;
let startElementId = 1;
let carouselElementArray = [4, 1, 2, 3];
console.log(carouselElementArray)
let carouselElementArrayDouble = [4, 1, 2, 3];

const carouselItemsElement = document.querySelectorAll(".carousel-items-element")

function renderProducts(products, num = 0) {
    let e = 0;
    let n = 4;
    for (const product of products) {

        if (num === 0) {
            for (let i = 0; i < carouselElementArray.length; i++) {
                if (carouselElementArray[i] === product.id) {
                    let productsContainer = document.querySelector(`#slide-${carouselElementArray[i]}`);
                    productsContainer.innerHTML = "";
                    productsContainer.innerHTML += `
            <img src="${product.imgUrl}" alt="${product.description}">
            <h5>${product.title}</h5>
            <p class="price">${product.price}</p>
            <div id="${product.id}" class="carousel-items-element-pin">Add to cart</div>`;
                    break
                }
            }
        } else if (num === 1) {
            if (carouselElementArray[e] === product.id) {
                let productsContainer = document.querySelector(`#slide-${n}`);
                productsContainer.innerHTML = "";
                productsContainer.innerHTML += `
            <img src="${product.imgUrl}" alt="${product.description}">
            <h5>${product.title}</h5>
            <p class="price">${product.price}</p>
            <div id="${product.id}" class="carousel-items-element-pin">Add to cart</div>`;
                e += 3;
                n--;
            }
        }
    }
}

document.querySelectorAll('carousel-items-element-pin').forEach(cartPinOpen => cartPinOpen.addEventListener('click', openCart));
async function fetchProducts() {
    const response = await fetch("products-carousel.json");
    products = await response.json();
    renderProducts(products);
}
fetchProducts();

const carslBack = document.querySelector(".carousel-element-back");
const carslForward = document.querySelector(".carousel-element-forward");

carslBack.addEventListener("click", prevSlide);


let prevSlideX = 0;

function prevSlide() {
    startElementId--;
    if (startElementId <= 0) startElementId = 4;
    elementId = startElementId;
    nextSlideX -= 26;
    carouselItemsElement.forEach(element => {
        element.style.transform = `translateX(${nextSlideX}vw)`
    })

    for (let i = 0; i < carouselElementArray.length; i++) {
        carouselElementArrayDouble[i]--;
        carouselElementArrayDouble[i] <= 0 ? carouselElementArrayDouble[i] = 4 : carouselElementArrayDouble[i];
    }


    for (let i = 0; i < carouselElementArrayDouble.length; i++) {
        i === 3 ? carouselElementArray[i] = carouselElementArrayDouble[0] : carouselElementArray[i] = carouselElementArrayDouble[i + 1];
    }
    renderProducts(products, 1)
}

carslForward.addEventListener("click", nextSlide);


let nextSlideX = 0;

function nextSlide() {
    startElementId++;
    if (startElementId >= 5) startElementId = 1;
    elementId = startElementId;
    nextSlideX += 26;
    carouselItemsElement.forEach(element => {
        element.style.transform = `translateX(${nextSlideX}vw)`
    })

    for (let i = 0; i < carouselElementArray.length; i++) {
        carouselElementArrayDouble[i]++;
        carouselElementArrayDouble[i] >= 5 ? carouselElementArrayDouble[i] = 1 : carouselElementArrayDouble[i];
    }

    for (let i = 0; i < carouselElementArrayDouble.length; i++) {
        i === 3 ? carouselElementArray[i] = carouselElementArrayDouble[0] : carouselElementArray[i] = carouselElementArrayDouble[i + 1];
    }
    renderProducts(products, 1)
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