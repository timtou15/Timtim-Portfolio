"use strict";

/* ============================= toggle style switcher =============================*/
var styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", function () {
  document.querySelector(".style-switcher").classList.toggle("open");
}); //hide style - switcher on scholl

window.addEventListener("scroll", function () {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});
/* ============================= theme colors =============================*/

var alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach(function (style) {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/* ============================= theme light and dark mode =============================*/


var dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", function () {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", function () {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});