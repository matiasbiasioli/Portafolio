const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.style.overflowX = 'hidden';
    nav.style.transition = 'ease .5s all';
    nav.style.transform = 'translateX(-5px)'
    nav.style.visibility = 'visible';
    
})
cerrar.addEventListener("click", () => {
    nav.style.overflowX = 'hidden';
    nav.style.transform = 'translateX(150px)'
    nav.style.transition = 'ease .5s all';
    nav.style.visibility = 'hidden';

})

//TYPED CODE
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
sr.reveal('.cards__container' , {
    duration: 4000,
})
sr.reveal('.tech_1' , {
    duration: 2000,
    origin: 'left',
    distance: '500px',
    
})
sr.reveal('.tech_2' , {
    duration: 4000,
    origin: 'left',
    distance: '500px',
    
})
sr.reveal('.tech_3' , {
    duration: 5000,
    origin: 'left',
    distance: '500px',
    
})
