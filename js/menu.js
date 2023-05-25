let menubutton = document.getElementById("menu-button");
let menudiv = document.getElementById("menu-open");

menubutton.addEventListener("click", function() {
    menubutton.toggleAttribute("aria-expanded")
    menudiv.classList.toggle('active')
});
