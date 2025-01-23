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
    const link = document.createElement('a'); 
    link.href = 'Luiz_Carlos_CV.pdf'; 
    link.download = 'Luiz_Carlos_CV.pdf';
    link.click(); 
    link.remove(); 
});

/* ============================= Navigation Menu ============================= */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
const allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

let activeSectionIndex = 0;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function (e) {
        e.preventDefault();
        updateNav(this);
        changeSection(this);
        closeMenu();
    });
}

/* ============================= Change Section ============================= */
function changeSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    const newSectionIndex = Array.from(allSection).findIndex(
        (section) => section.id === target
    );

    if (newSectionIndex === activeSectionIndex) return;

    const currentSection = allSection[activeSectionIndex];
    const nextSection = allSection[newSectionIndex];

    currentSection.style.zIndex = "1";
    nextSection.style.zIndex = "2";

    if (newSectionIndex > activeSectionIndex) {
        currentSection.classList.add("slide-out-left");
        nextSection.classList.add("slide-in-right");
    } else {
        currentSection.classList.add("slide-out-right");
        nextSection.classList.add("slide-in-left");
    }

    setTimeout(() => {
        currentSection.classList.remove(
            "active",
            "slide-out-left",
            "slide-out-right"
        );
        nextSection.classList.remove(
            "slide-in-left",
            "slide-in-right"
        );
        nextSection.classList.add("active");
        currentSection.style.zIndex = "0";
        activeSectionIndex = newSectionIndex;
    }, 500);
}

/* ============================= Update Navigation ============================= */
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");

        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

/* ============================= Close Mobile Menu ============================= */
function closeMenu() {
    const navToggler = document.querySelector(".nav-toggler");
    const timtim = document.querySelector(".timtim");

    if (timtim.classList.contains("open")) {
        timtim.classList.remove("open");
        navToggler.classList.remove("open");
    }
}

/* ============================= Buttons Outside Menu ============================= */
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        const target = this.getAttribute("href").split("#")[1];
        const targetSection = document.querySelector("#" + target);

        if (targetSection) {
            changeSection(this);
            updateNav(this);
            closeMenu();
        }
    });
});

/* ============================= Mobile Menu Toggle ============================= */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    document.querySelector(".timtim").classList.toggle("open");
    navToggler.classList.toggle("open");
});



