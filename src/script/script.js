/* +Fade-in block elements */
let fadeinThreshold = (document.documentElement.clientHeight <= 480 ||
    document.documentElement.clientWidth <= 480) ? 80 : 250;

let fadeinBlocks = [];

function findFadeinBlocks() {
    for (const block of document.querySelectorAll('.js-fadein-block')) {
        const blockInfo = {
            block: block,
            elements: block.querySelectorAll('.js-fadein-elem')
        }
        let delay = 200;
        for (const elem of blockInfo.elements) {
            elem.style.transition = `transform 700ms ease-in-out ${delay}ms, 
                                    opacity 700ms ease-in-out ${delay}ms, 
                                    color 300ms`;
            delay += 100;
        }
        fadeinBlocks.push(blockInfo);
    }
}

function scrolledPastBlock(block) {
    return document.documentElement.clientHeight - block.getBoundingClientRect().top > fadeinThreshold;
}

function showFadeinBlocks() {
    let stillHidden = [];
    for (const blockInfo of fadeinBlocks) {
        if (scrolledPastBlock(blockInfo.block)) {
            for (const elem of blockInfo.elements) {
                elem.classList.remove('js-fadein-elem');
                elem.classList.add('js-fadein-elem-visible');
            }
        } else {
            stillHidden.push(blockInfo);
        }
    }
    fadeinBlocks = stillHidden;
}

findFadeinBlocks();
document.addEventListener('scroll', showFadeinBlocks);
document.addEventListener('DOMContentLoaded', showFadeinBlocks)
/* -Fade-in block elements */

/* +Change header text color */
let body = document.body;
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');

function changeBodyColor() {
    let page = window.location.pathname;
    if (page.includes('/about') || page.includes('/contact')) {
        body.classList.remove('white-page');
        body.classList.add('black-page');
    } else {
        body.classList.remove('black-page');
        body.classList.add('white-page');
    }
}

changeBodyColor();
/* -Change header text color */

/* +Add a transition-delay to each letter */
function addTransitionDelay() {
    let words = document.querySelectorAll('.js-word');
    for (let word of words) {
        let delay = 50;
        for (let letter of word.children) {
            letter.style.transitionDelay = `${delay}ms`;
            delay += 50;
        }
    }
}

addTransitionDelay();
/* +Add a transition-delay to each letter */

/* +Scroll up */
let arrowUp = document.querySelector('.js-arrow-up');
arrowUp.addEventListener('click', event => {
    if (!arrowUp.classList.contains('arrow-up-visible')) return;
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('scroll', event => {
    if (window.pageYOffset > window.innerHeight) {
        arrowUp.classList.add('arrow-up-visible');
    } else {
        arrowUp.classList.remove('arrow-up-visible');
    }
});
/* -Scroll up */