const humberger_menu = document.querySelector('.humberger-menu');
const nav_links = document.querySelector('.nav-links');
const ham1 = document.querySelector('.ham1');
const ham2 = document.querySelector('.ham2');
const ham3 = document.querySelector('.ham3');


humberger_menu.addEventListener('click', () => {
    nav_links.classList.toggle('toggle')
    ham1.classList.toggle('tog');
    ham2.classList.toggle('tog');
    ham3.classList.toggle('tog');
})