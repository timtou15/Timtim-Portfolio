"use strict";

/* ============================= Typing Animation ============================= */
var typingStrings = {
  en: ["Web Designer", "Web Developer", "Chess Player"],
  pt: ["Designer Web", "Desenvolvedor Web", "Jogador de Xadrez"]
};
var currentLanguage = "en"; // Default language

function startTypingAnimation() {
  new Typed(".typing", {
    strings: typingStrings[currentLanguage],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
  });
}

startTypingAnimation(); // Initialize typing animation

var translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    viewMore: "View More",
    // Home section
    hello: "Hello, my name is",
    profession: "I'm a",
    hireMe: "Hire Me",
    bio: "I've got two years of experience as a web designer and I'm studying computer engineering. I'm really into web development, graphic design, and I enjoy playing chess in my free time",
    // About section
    aboutMe: "About Me",
    aboutTitle: "I'm Luiz, also known as Timtim, and I'm a",
    webDeveloper: "Web Developer",
    aboutText: "From a lifelong fascination with computers to a current passion for programming, my journey has been a quest for purpose. Programming, once a puzzle that left me feeling lost, became my compass as I delved into the world of web development",
    birthday: "Birthday",
    age: "Age",
    email: "Email",
    degree: "Degree",
    city: "City",
    freelance: "Freelance",
    downloadCV: "Download CV",
    education: "Education",
    // Education section
    educationTitle: "Education",
    course1: {
      period: "2021 - 2022",
      title: "Full Stack Web Development - SENAI",
      description: "I gained technical knowledge in web development, which served as my stepping stone into this world. I acquired solid understanding of programming logic, HTML, CSS, JS, and PHP."
    },
    course2: {
      period: "2022 - Currently",
      title: "Computer Engineering - ENIAC",
      description: "Up to this point, while pursuing my bachelor's degree, I've been exposed to various technologies such as C, C#, Bootstrap, MySQL, NoSQL, AJAX, and JSON. I still have much to learn and a long way to go before completing my degree, but I'm excited about this journey."
    },
    // Services section
    servicesTitle: "Services",
    mobileFriendly: "Mobile-Friendly",
    mobileFriendlyDesc: "I'll make your website accessible anywhere. I develop responsive designs to ensure your platform is visually appealing and fully functional on mobile devices, providing a consistent experience across all screens.",
    webAppDev: "Interactive Web Applications Development",
    webAppDevDesc: "I offer specialized services in the development of interactive and engaging web applications. Using cutting-edge technologies and innovative programming practices, I ensure that your applications not only meet your unique needs but also provide a dynamic experience for users. From user-friendly interfaces to interactive features.",
    visualIdentity: "Visual Identity Design",
    visualIdentityDesc: "Visual design is essential for conveying your brand identity. I offer graphic and interface design services, ensuring an attractive and consistent color palette to strengthen the visual presence of your brand.",
    customWebDev: "Customized Web Development",
    customWebDevDesc: "I develop customized and efficient web solutions. With experience in various programming languages, my focus is on creating websites and applications that meet your specific needs, ensuring exceptional functionality and performance.",
    seoEnhancement: "SEO Enhancement",
    seoEnhancementDesc: "I offer specialized services in search engine optimization (SEO). Using advanced SEO practices, I help improve your website's online visibility, increasing organic traffic and attracting more users.",
    digitalMarketing: "Digital Marketing Amplification",
    digitalMarketingDesc: "Amplify your brand presence with personalized digital marketing strategies. From impactful advertising campaigns to engaging social media strategies, I help increase awareness and promote your brand effectively.",
    // Portfolio section
    portfolioTitle: "Portfolio",
    lastProjects: "My Last Projects:",
    // Contact section
    contactTitle: "Contact Me",
    questions: "DO YOU HAVE ANY QUESTIONS?",
    atYourService: "I'm at your services",
    callUs: "Call Us On",
    office: "Office",
    sendEmail: "SEND ME AN EMAIL",
    replyPrompt: "I'll reply as soon as possible",
    name: "Name",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    available: "Available"
  },
  pt: {
    // Navigation
    home: "Início",
    about: "Sobre",
    services: "Serviços",
    portfolio: "Portfólio",
    contact: "Contato",
    viewMore: "Ver Mais",
    // Home section
    hello: "Olá, meu nome é",
    profession: "Eu sou um",
    hireMe: "Me Contrate",
    bio: "Tenho dois anos de experiência como designer web e estou estudando engenharia da computação. Sou apaixonado por desenvolvimento web, design gráfico e gosto de jogar xadrez no meu tempo livre",
    // About section
    aboutMe: "Sobre Mim",
    aboutTitle: "Sou Luiz, também conhecido como Timtim, e sou um",
    webDeveloper: "Desenvolvedor Web",
    aboutText: "Desde uma fascinação pela computação até uma paixão pela programação, minha jornada tem sido uma busca por propósito. Programação, que antes parecia um quebra-cabeça confuso, tornou-se minha bússola ao mergulhar no mundo do desenvolvimento web",
    birthday: "Aniversário",
    age: "Idade",
    email: "E-mail",
    degree: "Formação",
    city: "Cidade",
    freelance: "Freelance",
    downloadCV: "Baixar CV",
    education: "Educação",
    // Education section
    educationTitle: "Educação",
    course1: {
      period: "2021 - 2022",
      title: "Desenvolvimento Web Full Stack - SENAI",
      description: "Adquiri conhecimento técnico em desenvolvimento web, que serviu como meu ponto de partida neste mundo. Obtive uma sólida compreensão de lógica de programação, HTML, CSS, JS e PHP."
    },
    course2: {
      period: "2022 - Atualmente",
      title: "Engenharia da Computação - ENIAC",
      description: "Até este momento, durante minha graduação, fui exposto a várias tecnologias como C, C#, Bootstrap, MySQL, NoSQL, AJAX e JSON. Ainda tenho muito a aprender e um longo caminho pela frente antes de completar meu curso, mas estou empolgado com esta jornada."
    },
    // Services section
    servicesTitle: "Serviços",
    mobileFriendly: "Responsivo para Mobile",
    mobileFriendlyDesc: "Torno seu site acessível em qualquer lugar. Desenvolvo designs responsivos para garantir que sua plataforma seja visualmente atraente e totalmente funcional em dispositivos móveis, proporcionando uma experiência consistente em todas as telas.",
    webAppDev: "Desenvolvimento de Aplicações Web Interativas",
    webAppDevDesc: "Ofereço serviços especializados no desenvolvimento de aplicações web interativas e envolventes. Usando tecnologias de ponta e práticas inovadoras de programação, garanto que suas aplicações não apenas atendam às suas necessidades específicas, mas também proporcionem uma experiência dinâmica aos usuários. De interfaces amigáveis a recursos interativos.",
    visualIdentity: "Design de Identidade Visual",
    visualIdentityDesc: "O design visual é essencial para transmitir a identidade da sua marca. Ofereço serviços de design gráfico e de interface, garantindo uma paleta de cores atraente e consistente para fortalecer a presença visual da sua marca.",
    customWebDev: "Desenvolvimento Web Personalizado",
    customWebDevDesc: "Desenvolvo soluções web personalizadas e eficientes. Com experiência em várias linguagens de programação, meu foco é criar sites e aplicações que atendam às suas necessidades específicas, garantindo funcionalidade e desempenho excepcionais.",
    seoEnhancement: "Otimização de SEO",
    seoEnhancementDesc: "Ofereço serviços especializados em otimização para mecanismos de busca (SEO). Usando práticas avançadas de SEO, ajudo a melhorar a visibilidade online do seu site, aumentando o tráfego orgânico e atraindo mais usuários.",
    digitalMarketing: "Amplificação de Marketing Digital",
    digitalMarketingDesc: "Amplifique a presença da sua marca com estratégias personalizadas de marketing digital. De campanhas publicitárias impactantes a estratégias envolventes de mídia social, ajudo a aumentar a conscientização e promover sua marca de forma eficaz.",
    // Portfolio section
    portfolioTitle: "Portfólio",
    lastProjects: "Meus Últimos Projetos:",
    // Contact section
    contactTitle: "Entre em Contato",
    questions: "VOCÊ TEM ALGUMA PERGUNTA?",
    atYourService: "Estou à sua disposição",
    callUs: "Ligue para",
    office: "Escritório",
    sendEmail: "ENVIE-ME UM EMAIL",
    replyPrompt: "Responderei o mais breve possível",
    name: "Nome",
    subject: "Assunto",
    message: "Mensagem",
    sendMessage: "Enviar Mensagem",
    available: "Disponível"
  }
};

function updateContent() {
  var t = translations[currentLanguage]; // Update navigation

  document.querySelectorAll(".nav li a").forEach(function (link, index) {
    var keys = ["home", "about", "services", "portfolio", "contact"];
    var iconHTML = link.querySelector("i").outerHTML;
    link.innerHTML = "".concat(iconHTML, " ").concat(t[keys[index]]); // Re-add click event listener

    link.addEventListener("click", function (e) {
      e.preventDefault();
      updateNav(this);
      changeSection(this);
      closeMenu();
    });
  }); // Update home section

  document.querySelector(".hello").innerHTML = "".concat(t.hello, " <span class=\"name\">Luiz Carlos</span>");
  document.querySelector(".my-profession").innerHTML = "".concat(t.profession, " <span class=\"typing\"></span>"); // Fix for chess button - Save the chess link before updating text content

  var bioElement = document.querySelector(".home-info p");
  var chessLink = bioElement.querySelector("a");
  bioElement.textContent = t.bio; // Re-append the chess link after updating text

  if (chessLink) {
    bioElement.appendChild(document.createTextNode(" "));
    bioElement.appendChild(chessLink);
  } // Update hire me buttons and re-add click events


  document.querySelectorAll(".btn.hire-me").forEach(function (btn) {
    btn.textContent = t.hireMe;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var contactSection = document.querySelector("#contact");

      if (contactSection) {
        changeSection({
          getAttribute: function getAttribute() {
            return "#contact";
          }
        });
        updateNav(document.querySelector('a[href="#contact"]'));
        closeMenu();
      }
    });
  }); // Update about section

  document.querySelector(".section-title h2").textContent = t.aboutMe;
  document.querySelector(".about-text h3").innerHTML = "".concat(t.aboutTitle, " <span>").concat(t.webDeveloper, "</span>");
  document.querySelector(".about-text p").textContent = t.aboutText; // Update personal info

  var infoItems = document.querySelectorAll(".info-item p");
  infoItems[0].innerHTML = "".concat(t.birthday, ": <span>18 Feb 2004</span>");
  infoItems[1].innerHTML = "".concat(t.age, ": <span>20</span>");
  infoItems[2].innerHTML = "".concat(t.email, ": <span>game3918@hotmail.com</span>");
  infoItems[3].innerHTML = "".concat(t.degree, ": <span>Computer Engineer</span>");
  infoItems[4].innerHTML = "".concat(t.city, ": <span>S\xE3o Paulo</span>");
  infoItems[5].innerHTML = "".concat(t.freelance, ": <span>").concat(t.available, "</span>");
  document.getElementById("download-cv").textContent = t.downloadCV; // Update education section

  document.querySelector(".education .title").textContent = t.educationTitle;
  var timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems[0].querySelector(".timeline-date").innerHTML = "<i class=\"fa fa-calendar\"></i> ".concat(t.course1.period);
  timelineItems[0].querySelector(".timeline-title").textContent = t.course1.title;
  timelineItems[0].querySelector(".timeline-text").textContent = t.course1.description;
  timelineItems[1].querySelector(".timeline-date").innerHTML = "<i class=\"fa fa-calendar\"></i> ".concat(t.course2.period);
  timelineItems[1].querySelector(".timeline-title").textContent = t.course2.title;
  timelineItems[1].querySelector(".timeline-text").textContent = t.course2.description; // Update services section

  document.querySelector("#services .section-title h2").textContent = t.servicesTitle;
  var serviceItems = document.querySelectorAll(".service-item-inner");
  var services = [{
    title: "mobileFriendly",
    desc: "mobileFriendlyDesc"
  }, {
    title: "webAppDev",
    desc: "webAppDevDesc"
  }, {
    title: "visualIdentity",
    desc: "visualIdentityDesc"
  }, {
    title: "customWebDev",
    desc: "customWebDevDesc"
  }, {
    title: "seoEnhancement",
    desc: "seoEnhancementDesc"
  }, {
    title: "digitalMarketing",
    desc: "digitalMarketingDesc"
  }];
  serviceItems.forEach(function (item, index) {
    if (services[index]) {
      item.querySelector("h4").textContent = t[services[index].title];
      item.querySelector("p").textContent = t[services[index].desc];
    }
  }); // Update portfolio section

  document.querySelector("#portfolio .section-title h2").textContent = t.portfolioTitle;
  document.querySelector(".portfolio-heading h2").textContent = t.lastProjects; // Update contact section

  document.querySelector("#contact .section-title h2").textContent = t.contactTitle;
  document.querySelector(".contact-title").textContent = t.questions;
  document.querySelector(".contact-sub-title").textContent = t.atYourService;
  var contactInfoItems = document.querySelectorAll(".contact-info-item h4");
  contactInfoItems[0].textContent = t.callUs;
  contactInfoItems[1].textContent = t.office;
  contactInfoItems[2].textContent = t.email; // Update LinkedIn button text

  document.querySelector(".linkedin-button").textContent = t.viewMore;
  document.querySelector("h3.contact-title.padd-15:last-of-type").textContent = t.sendEmail;
  document.querySelector("h4.contact-sub-title:last-of-type").textContent = t.replyPrompt; // Update form placeholders

  document.querySelector('input[name="name"]').placeholder = t.name;
  document.querySelector('input[name="email"]').placeholder = t.email;
  document.querySelector('input[name="subject"]').placeholder = t.subject;
  document.querySelector('textarea[name="message"]').placeholder = t.message;
  document.querySelector('button[type="submit"]').textContent = t.sendMessage; // Restart typing animation with new language

  document.querySelector(".typing").innerHTML = "";
  startTypingAnimation();
}
/* ============================= Navigation Menu ============================= */


var nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    allSection = document.querySelectorAll(".section");
var activeSectionIndex = 0;

function updateNav(element) {
  navList.forEach(function (navItem) {
    navItem.querySelector("a").classList.remove("active");

    if (element.getAttribute("href") === navItem.querySelector("a").getAttribute("href")) {
      navItem.querySelector("a").classList.add("active");
    }
  });
}

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

function closeMenu() {
  var navToggler = document.querySelector(".nav-toggler");
  var timtim = document.querySelector(".timtim");

  if (timtim.classList.contains("open")) {
    timtim.classList.remove("open");
    navToggler.classList.remove("open");
  }
} // Add initial event listeners to navigation links


navList.forEach(function (navItem) {
  navItem.querySelector("a").addEventListener("click", function (e) {
    e.preventDefault();
    updateNav(this);
    changeSection(this);
    closeMenu();
  });
}); // Add initial event listeners to hire me buttons

document.querySelectorAll(".btn.hire-me").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    var contactSection = document.querySelector("#contact");

    if (contactSection) {
      changeSection({
        getAttribute: function getAttribute() {
          return "#contact";
        }
      });
      updateNav(document.querySelector('a[href="#contact"]'));
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
/* ============================= Language Switcher ============================= */
// Update the language icon based on current language

function updateLanguageIcon() {
  var icon = document.getElementById('language-icon');

  if (currentLanguage === 'en') {
    icon.className = 'flag-icon flag-icon-us'; // Show US flag when site is in English
  } else {
    icon.className = 'flag-icon flag-icon-br'; // Show Brazilian flag when site is in Portuguese
  }
} // Language switcher click handler


document.querySelector(".language-switcher").addEventListener("click", function () {
  currentLanguage = currentLanguage === "en" ? "pt" : "en";
  updateContent();
  updateLanguageIcon();
}); // Initialize the correct icon on page load

updateLanguageIcon();