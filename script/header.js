const menuPhone = document.querySelector('.js-toggle-menu');
const dropDownMenu = document.querySelector('.js-drop-down-menu');

menuPhone.addEventListener('click', () => {
    dropDownMenu.classList.toggle('phone-menu-is-active');
    menuPhone.classList.toggle('phone-menu-is-active');
    menuPhone.innerHTML = (menuPhone.innerHTML == 'Menu') ? 'Close' : 'Menu';
});