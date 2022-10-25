"use strict";

const menuIcon = document.querySelector(".header__icon--open");
const menuClose = document.querySelector(".header__icon--close");
const navigation = document.querySelector(".header__nav");

menuIcon.addEventListener("click", function () {
  navigation.classList.toggle("active");
});
