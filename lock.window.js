"use strict";
const padawan = document.querySelector("#Padawan");
const jedi = document.querySelector("#Jedi");
const checkYearsOld = document.querySelector(".check-years");
const checkYearsItems = document.querySelector(".check-years-items");

function checkYears(choice) {
    document.body.style.position = "fixed";
    checkYearsOld.style.display = "flex";
}
checkYears(0);

function unlock() {
    document.body.style.position = "static";
    checkYearsOld.style.display = "none";
}

function lock() {
    checkYearsItems.style.width = "300px";
    checkYearsItems.style.height = "300px";
    checkYearsOld.innerHTML = `<div class="check-years-items">
    <h2>Sorry, You Are Not Allowed to Enter This Site.</h2>
    <img src="img/decorative-img.svg" alt="decorative-img">
    <p>We don't sell alcohol to persons under 21 years old, according to federal laws.</p></div>`;
}
padawan.addEventListener("click", lock);
jedi.addEventListener("click", unlock);