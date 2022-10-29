/* +Active input */
const elements = document.forms.contactForm.elements;

for (let elem of elements) {
    if (elem.matches('.contact__input') || elem.matches('.contact__textarea')) {
        elem.addEventListener('focus', event => {
            let label = event.target.parentElement.querySelector('label');
            label.classList.add('open-input');
        });

        elem.addEventListener('blur', event => {
            event.target.value = event.target.value.trim();
            if (event.target.value.trim()) return;
            let label = event.target.parentElement.querySelector('label');
            label.classList.remove('open-input');
        })
    }
}
/* -Active input */