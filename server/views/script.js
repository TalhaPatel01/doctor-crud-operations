// 1. Theme Toggle (Light/Dark Mode)
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const newTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
});

// 2. Scroll to Sections (Navigation Bar) and 3. Smooth Scrolling (Section Transitions)
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// 4. Typing Effect in Text (Engagement & Visual Appeal)
const texts = ["Hello, I am Talha Patel.", "MERN Stack Enthusiast.", "Web Developer."];
let textIndex = 0, charIndex = 0;
const typingSpeed = 100;
const delayAfterTyping = 2000;

function typeText() {
    const typingElement = document.getElementById("typing-effect");
    if (charIndex < texts[textIndex].length) {
        typingElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(() => {
            typingElement.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            typeText();
        }, delayAfterTyping);
    }
}

typeText();

// 5. Project Gallery with Image Transitions
const projectImages = document.querySelectorAll(".project-gallery img");

projectImages.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.5s ease";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

// 6. Automatic Scrolling (Progressive Content Display)
let autoScrollEnabled = true;
const sections = document.querySelectorAll("section");
let currentSection = 0;

function autoScroll() {
    if (!autoScrollEnabled) return;
    sections[currentSection].scrollIntoView({ behavior: "smooth" });
    currentSection = (currentSection + 1) % sections.length;
    setTimeout(autoScroll, 3000);
}

autoScroll();

document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        autoScrollEnabled = !autoScrollEnabled; // Toggle auto-scroll on spacebar press
    }
});