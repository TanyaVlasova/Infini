const phoneMenu = document.querySelector('.js-phone-menu')
const menuButton = phoneMenu.querySelector('.js-toggle-menu');
const dropDownMenu = phoneMenu.querySelector('.js-drop-down-menu');

menuButton.addEventListener('click', () => {
    phoneMenu.classList.toggle('phone-menu_active');
    menuButton.innerHTML = (menuButton.innerHTML == 'Menu') ? 'Close' : 'Menu';
});