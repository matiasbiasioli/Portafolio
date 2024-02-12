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
    strings: ['Web Developer', 'Responsive Design', 'Javascript'],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true,
    loopCount: false
}) 

// CODIGO SCROLL REVEAL 

window.sr = ScrollReveal();

sr.reveal('.about__container' , {
    duration: 4000,
    reset: true
}) 
sr.reveal('.tech_1' , {
    duration: 2000,
    origin: 'left',
    distance: '500px',
    reset: true,
})
sr.reveal('.tech_2' , {
    duration: 4000,
    origin: 'left',
    distance: '500px',
    reset: true,
})
sr.reveal('.tech_3' , {
    duration: 5000,
    origin: 'left',
    distance: '500px',
    reset: true,
})
sr.reveal('.card' , {
    duration: 4000,
    reset: true,
})