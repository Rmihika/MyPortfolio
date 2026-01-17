/* ========================
   HAMBURGER MENU TOGGLE
=========================== */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ========================
   THEME TOGGLE
=========================== */
const themeIcons = document.querySelectorAll("#theme-icon, #theme-icon-mobile");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
  document.documentElement.setAttribute("data-theme", "dark");
  themeIcons.forEach(icon => icon.src = "./assets/light-mode.png");
} else {
  themeIcons.forEach(icon => icon.src = "./assets/night-mode.png");
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.setAttribute("data-theme", "light");
    themeIcons.forEach(icon => icon.src = "./assets/night-mode.png");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcons.forEach(icon => icon.src = "./assets/light-mode.png");
    localStorage.setItem("theme", "dark");
  }
}

/* ========================
   TYPING EFFECT
=========================== */
const textElement = document.querySelector(".typing-name");
const names = ["Mihika Raut", "मिहिका राऊत"];
let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeName() {
  const currentName = names[nameIndex];
  if (isDeleting) {
    textElement.textContent = currentName.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentName.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typeSpeed = isDeleting ? 100 : 200;
  
  if (!isDeleting && charIndex === currentName.length) {
    typeSpeed = 2000; 
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    nameIndex = (nameIndex + 1) % names.length;
    typeSpeed = 500;
  }
  setTimeout(typeName, typeSpeed);
}

/* ========================
   SCROLL REVEAL
=========================== */
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
    typeName();
    reveal();
});

window.addEventListener('scroll', reveal);

/* ========================
   BRACKET CURSOR LOGIC
=========================== */
const cursorBracket = document.querySelector("[data-cursor-bracket]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorBracket.style.left = `${posX}px`;
  cursorBracket.style.top = `${posY}px`;
});

// Add hover effect to ALL clickable elements
const interactiveElements = document.querySelectorAll("a, button, .icon, .theme-btn-container, .menu-links li");

interactiveElements.forEach((el) => {
  el.addEventListener("mouseover", () => {
    cursorBracket.classList.add("cursor-hover");
  });

  el.addEventListener("mouseleave", () => {
    cursorBracket.classList.remove("cursor-hover");
  });
});

/* ========================
   LOADING SCREEN LOGIC
=========================== */
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("loaded");
  }, 500);
});