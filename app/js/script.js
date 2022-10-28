"use strict";

const body = document.querySelector("body");
const menuIcon = document.querySelector(".header__icon--open");
const menuClose = document.querySelector(".header__icon--close");
const navigation = document.querySelector(".header__nav");

const menuIconFunctionality = function () {
  menuIcon.style.display = "none";
  menuClose.style.display = "block";
  navigation.classList.toggle("active");
  body.classList.toggle("overflow-active");
};

const closeIconFunctionality = function () {
  menuIcon.style.display = "block";
  menuClose.style.display = "none";
  navigation.classList.toggle("active");
  body.classList.toggle("overflow-active");
};

menuIcon.addEventListener("click", function () {
  menuIconFunctionality();
});

menuClose.addEventListener("click", function () {
  closeIconFunctionality();
});
