let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("container section");
// let body = document.querySelector("body");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
	let fromTop = window.scrollY;

	mainNavLinks.forEach(link => {
		let section = document.querySelector(link.hash);

		if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
			link.classList.add("active");
		} else {
			link.classList.remove("active");		}
	});
});