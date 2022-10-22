const title = document.querySelector('.slideshow__title');

function changeTitle() {
    setTimeout( () => { 
        title.innerHTML == 'Granite' ? title.innerHTML = 'Exotic' : title.innerHTML = 'Granite';
        setTimeout( () => {
            changeTitle();
        }, 1500 );
    }, 3500 );
}

changeTitle();

let slides = document.querySelectorAll('.js-slide');
console.log(slides);