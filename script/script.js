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
                    opacity 700ms ease-in-out ${delay}ms`;
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
    if (page == '/' || page == '/index.html' || page == '/products.html') {
        body.classList.remove('black-page');
        body.classList.add('white-page');
    } else {
        body.classList.remove('white-page');
        body.classList.add('black-page');
    }
}

changeBodyColor();
/* -Change header text color */

/* +Add a transition-delay to each letter */
function addTransitionDelay() {
    let words = document.querySelectorAll('.js-word');
    console.log(words);
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