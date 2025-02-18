//Burguer Menu Mobile
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    // nav.style.transition = 'ease .5s all';
    // nav.style.transform = 'translateX(-5px)'
    nav.style.visibility = 'visible';
    nav.style.transition = 'visibility ease-in .1s'

})
cerrar.addEventListener("click", () => {
    // nav.style.transform = 'translateX(150px)'
    // nav.style.transition = 'ease .5s all';
    nav.style.transition = 'visibility ease-out .1s'
    nav.style.visibility = 'hidden';
})

//Dark Mode
document.addEventListener('DOMContentLoaded', () => {
    const btnLight = document.querySelector('#light');
    const btnDark = document.querySelector('#dark');
    const body = document.body;

    if(localStorage.getItem('theme')=== 'light'){
        body.classList.add('light-mode')
    }
    btnLight.addEventListener('click', () => {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        console.log('light activado');
    })
    btnDark.addEventListener('click', () => {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        console.log('dark activado');
    })
})

//TYPED CODE
let typed = new Typed('.typed', {
    strings: ['Web Developer', 'Responsive Design', 'Javascript', 'React js', 'React Native'],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true,
    loopCount: false
})

// Iniciar ScrollReveal
const sr = ScrollReveal({
    distance: '50px',  // Distancia de desplazamiento
    duration: 1000,    // Duración de la animación en milisegundos
    easing: 'ease-in-out',
    reset: true        // Si quieres que se repita la animación al hacer scroll
});
// Aplicar animación a elementos
sr.reveal('.about__container', { 
    origin: 'bottom', // Desde dónde aparece (top, right, bottom, left)
    delay: 300        // Retraso en ms antes de aparecer
});
sr.reveal('.portfolio-container', {
    duration: 2000,
})

