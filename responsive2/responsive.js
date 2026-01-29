var menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-hide")

console.log(menuBtn);
console.log(menu);

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu.classList.toggle("hide");
    menu.classList.toggle("change");
}