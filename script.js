const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menu-items');

menu.addEventListener('click', () => {
    menu.classList.toggle('close');
    menuItems.classList.toggle('show');
})