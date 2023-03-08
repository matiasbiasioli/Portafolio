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
sr.reveal('.tecnologias__content' , {
    duration: 3000,
    origin: 'left',
    distance: '400px',
    reset: true,
})
sr.reveal('.hobbies__content' , {
    duration: 3000,
    origin: 'right',
    distance: '400px',
    reset: true,
    mobile: false
})
sr.reveal('.card' , {
    duration: 2000,
    reset: true,
    rotate: {
        x: 0,
        y: 120,
        z: 0
    },
})