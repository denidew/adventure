const humberger_menu = document.querySelector('.humberger-menu');
const nav_links = document.querySelector('.nav-links');

humberger_menu.addEventListener('click', () => {
    nav_links.classList.toggle('toggle')
})