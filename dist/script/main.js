/* +Slideshow */
let SLIDES_DATA = [
    {
        title: 'Granite',
        href: '#',
        srcLandspace: 'img/granite.jpg',
        srcPortrait: 'img/granite2.jpg',
        alt: 'Granite image'
    },
    {
        title: 'Exotic',
        href: '#',
        srcLandspace: 'img/exotic.jpg',
        srcPortrait: 'img/exotic2.jpg',
        alt: 'Exotic image'
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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function loadSlide(slideIndex) {
    let slide = SLIDES_DATA[slideIndex];
    slideshowLink.setAttribute('href', slide.href);
    slideshowImage.setAttribute('alt', slide.alt);
    let img = window.innerWidth > window.innerHeight ? slide.srcLandspace : slide.srcPortrait;
    slideshowImage.setAttribute('src', img);
    slideshowTitle.innerHTML = slide.title;
}

async function shiftSlide() {
    let slide = slideshowSlide.style;
    slide.transition = '';
    slide.transform = 'translateX(0%)';
    await sleep(4000);
    slide.transform = 'translateX(-100%)';
    await sleep(900);
    slide.transition = 'transform 0s';
    slide.transform = 'translateX(100%)';
    await sleep(100);
}

async function cycleThroughSlides() {
    for (let i = 0; ; i = (i + 1) % slideshowLength) {
        loadSlide(i);
        await shiftSlide();
    }
}

cycleThroughSlides();
/* -Slideshow */