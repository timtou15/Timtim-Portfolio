"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var languageSwitcher = document.querySelector(".language-switcher");
  var languageIcon = document.getElementById("language-icon"); // Carregar as traduções do arquivo JSON

  fetch("js/translations.json").then(function (response) {
    return response.json();
  }).then(function (translations) {
    function setLanguage(lang) {
      document.documentElement.lang = lang;
      localStorage.setItem("selectedLanguage", lang); // Atualizar os textos dos elementos com `data-translate`

      document.querySelectorAll("[data-translate]").forEach(function (element) {
        var key = element.getAttribute("data-translate");
        element.textContent = translations[lang][key] || key;
      }); // Atualizar placeholders dos inputs

      document.querySelectorAll("[data-translate-placeholder]").forEach(function (element) {
        var key = element.getAttribute("data-translate-placeholder");
        element.placeholder = translations[lang][key] || key;
      }); // Atualizar ícone de idioma

      languageIcon.classList.toggle("fa-globe", lang === "en");
      languageIcon.classList.toggle("fa-language", lang === "pt");
    } // Carregar o idioma salvo ou padrão (português)


    var savedLanguage = localStorage.getItem("selectedLanguage") || "pt";
    setLanguage(savedLanguage); // Alternar idioma ao clicar no botão

    languageSwitcher.addEventListener("click", function () {
      var newLanguage = document.documentElement.lang === "pt" ? "en" : "pt";
      setLanguage(newLanguage);
    });
  })["catch"](function (error) {
    return console.error("Erro ao carregar traduções:", error);
  });
});