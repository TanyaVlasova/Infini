/* +Fade-in block elements */
let fadeinThreshold = (document.documentElement.clientHeight <= 480 ||
    document.documentElement.clientWidth <= 480) ? 80 : 300;

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
/* -Fade-in block elements */