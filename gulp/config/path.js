import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/`,
        css: `${buildFolder}/`,
        html: `${buildFolder}/`,
        img: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        js: `${srcFolder}/script.js`,
        img: `${srcFolder}/img/*.*`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/index.pug`,
        fonts: `${srcFolder}/fonts/*.ttf`
    },
    watch: {
        js: `${srcFolder}/**/*.js`,
        scss: `${srcFolder}/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,
        img: `${srcFolder}/img/*.*`,
        fonts: `${srcFolder}/fonts/*.ttf`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}