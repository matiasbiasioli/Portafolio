const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})

//TYPED
let typed = new Typed('.typed', {
    strings: ['Desarrollo Web', 'Diseño Responsivo', 'Animaciones'],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true,
    loopCount: false
}) 