let SLIDES_DATA = [
    {
        title: 'Granite',
        href: '#',
        src: 'https://i.ibb.co/myYXRnP/granite.jpg',
        alt: 'Granite image'
    },
    {
        title: 'Exotic',
        href: '#',
        src: 'https://i.ibb.co/RDKvxMC/exotic.jpg',
        alt: 'Exotic image'
    },
    {
        title: 'Blue Dunes',
        href: '#',
        src: 'https://infiniinc.com/uploads/2018/02/IN0014-1080x1080.jpg',
        alt: 'Blue Dunes image'
    }
];

let slideshow = document.querySelector('.js-slideshow');
const slideshowLength = SLIDES_DATA.length;

let slideshowLink = document.createElement('a');
let slideshowSlide = document.createElement('div');
let slideshowImage = document.createElement('img');
let slideshowTitle = document.createElement('h1');

slideshowLink.className = 'slideshow__link';
slideshowSlide.className = 'slideshow__slide';
slideshowImage.className = 'slideshow__image';
slideshowTitle.className = 'slideshow__title';

slideshow.append(slideshowLink);
slideshowLink.append(slideshowSlide, slideshowTitle);
slideshowSlide.append(slideshowImage);

function changeSlide() {
    let numOfSlide = 0;
    return function change() {
        slideshowLink.setAttribute('href', SLIDES_DATA[numOfSlide].href);
        slideshowImage.setAttribute('src', SLIDES_DATA[numOfSlide].src);
        slideshowImage.setAttribute('alt', SLIDES_DATA[numOfSlide].alt);
        slideshowTitle.innerHTML = SLIDES_DATA[numOfSlide].title;

        (numOfSlide == slideshowLength - 1) ? numOfSlide = 0 : numOfSlide++;
        setTimeout(change, 5000);
    }
}

let changeSlides = changeSlide();
changeSlides();

async function moveSlide() {
    await new Promise(resolve => {
        setTimeout(() => {
            slideshowSlide.style.transition = 'all 900ms';
            slideshowSlide.style.transform = 'translateX(0%)';
            resolve();
        }, 0);
    });
    await new Promise(resolve => {
        setTimeout(() => {
            slideshowSlide.style.transform = 'translateX(-100%)';
            resolve();
        }, 4000);
    });
    await new Promise(resolve => {
        setTimeout(() => {
            slideshowSlide.style.transition = 'all 0s';
            slideshowSlide.style.transform = 'translateX(100%)';
            resolve();
        }, 900);
    });
    await new Promise(resolve => {
        setTimeout(() => {
            moveSlide();
            resolve();
        }, 100);
    });
}

moveSlide();