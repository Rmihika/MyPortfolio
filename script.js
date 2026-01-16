// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// THEME TOGGLE LOGIC
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

// Typing Effect
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

// Scroll Reveal
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

/* CUSTOM CURSOR LOGIC */
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 400, fill: "forwards" }
  );
});

const interactiveElements = document.querySelectorAll("a, button, .icon, .theme-btn-container, .menu-links li");

interactiveElements.forEach((el) => {
  el.addEventListener("mouseover", () => {
    cursorOutline.classList.add("cursor-hover");
  });

  el.addEventListener("mouseleave", () => {
    cursorOutline.classList.remove("cursor-hover");
  });
});

/* LOADING SCREEN LOGIC */
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  
  // Wait just a tiny bit so the animation finishes nicely
  setTimeout(() => {
    preloader.classList.add("loaded");
  }, 500); // 0.5s delay
});