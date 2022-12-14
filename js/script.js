const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const registr = document.querySelector(".menu-registr");
const body = document.body;

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	navMenu.classList.toggle("active");
	registr.classList.toggle("active");
	body.classList.toggle("noscroll")
});

document.querySelectorAll(".menu-link").forEach(n => n.addEventListener("click", () => {
	burger.classList.remove("active");
	navMenu.classList.remove("active");
	registr.classList.remove("active");
}));