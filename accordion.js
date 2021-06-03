'use sctirct'


const accordionItemsElement = document.querySelectorAll('.accordion-items-element').forEach(element => element.addEventListener('click', accordionEventOpen))


function accordionEventOpen(event) {
    const element = event.target;
    const id = element.dataset.id;
    const spanId = document.querySelector(`#accordion-items-element-${id}`);
    const noneSpanId = document.querySelector(`#none-${id}`);
    if (spanId.style.transform === "translateY(-5vh)") {
        spanId.style.transform = "none";
        noneSpanId.style.display = 'none';
    } else {
        spanId.style.transform = "translateY(-5vh)";
        noneSpanId.style.display = "inline";
    }

}