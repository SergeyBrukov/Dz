"use strict"

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
}

const navLink = document.querySelectorAll(".menu__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}