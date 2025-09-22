// Active nav link saat scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Toggle menu burger di HP
const navLinks = document.querySelector(".nav-links");
const burger = document.createElement("div");
burger.classList.add("burger");
burger.innerHTML = "☰";

document.querySelector(".navbar .container").appendChild(burger);

burger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  navLinks.style.flexDirection = "column";
  navLinks.style.background = "#2a2a3b";
  navLinks.style.position = "absolute";
  navLinks.style.top = "60px";
  navLinks.style.right = "20px";
  navLinks.style.padding = "15px";
  navLinks.style.borderRadius = "8px";
});