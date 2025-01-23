"use strict";

/* ============================= Typing Animation ============================= */
var typed = new Typed(".typing", {
  strings: ["", "Web Designer", "Web Developer", "Chess Player"],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true
});
/* ============================= Download CV ============================= */

document.getElementById('download-cv').addEventListener('click', function (event) {
  event.preventDefault();
  var link = document.createElement('a');
  link.href = 'Luiz_Carlos_CV.pdf';
  link.download = 'Luiz_Carlos_CV.pdf';
  link.click();
  link.remove();
});
/* ============================= Navigation Menu ============================= */

var nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
var allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
var activeSectionIndex = 0;

for (var i = 0; i < totalNavList; i++) {
  var a = navList[i].querySelector("a");
  a.addEventListener("click", function (e) {
    e.preventDefault();
    updateNav(this);
    changeSection(this);
    closeMenu();
  });
}
/* ============================= Change Section ============================= */


function changeSection(element) {
  var target = element.getAttribute("href").split("#")[1];
  var newSectionIndex = Array.from(allSection).findIndex(function (section) {
    return section.id === target;
  });
  if (newSectionIndex === activeSectionIndex) return;
  var currentSection = allSection[activeSectionIndex];
  var nextSection = allSection[newSectionIndex];
  currentSection.style.zIndex = "1";
  nextSection.style.zIndex = "2";

  if (newSectionIndex > activeSectionIndex) {
    currentSection.classList.add("slide-out-left");
    nextSection.classList.add("slide-in-right");
  } else {
    currentSection.classList.add("slide-out-right");
    nextSection.classList.add("slide-in-left");
  }

  setTimeout(function () {
    currentSection.classList.remove("active", "slide-out-left", "slide-out-right");
    nextSection.classList.remove("slide-in-left", "slide-in-right");
    nextSection.classList.add("active");
    currentSection.style.zIndex = "0";
    activeSectionIndex = newSectionIndex;
  }, 500);
}
/* ============================= Update Navigation ============================= */


function updateNav(element) {
  for (var _i = 0; _i < totalNavList; _i++) {
    navList[_i].querySelector("a").classList.remove("active");

    var target = element.getAttribute("href").split("#")[1];

    if (target === navList[_i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[_i].querySelector("a").classList.add("active");
    }
  }
}
/* ============================= Close Mobile Menu ============================= */


function closeMenu() {
  var navToggler = document.querySelector(".nav-toggler");
  var timtim = document.querySelector(".timtim");

  if (timtim.classList.contains("open")) {
    timtim.classList.remove("open");
    navToggler.classList.remove("open");
  }
}
/* ============================= Buttons Outside Menu ============================= */


document.querySelectorAll(".btn").forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    var target = this.getAttribute("href").split("#")[1];
    var targetSection = document.querySelector("#" + target);

    if (targetSection) {
      changeSection(this);
      updateNav(this);
      closeMenu();
    }
  });
});
/* ============================= Mobile Menu Toggle ============================= */

var navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", function () {
  document.querySelector(".timtim").classList.toggle("open");
  navToggler.classList.toggle("open");
});