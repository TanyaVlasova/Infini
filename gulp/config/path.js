import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/`,
        js: `${buildFolder}/script/`,
        img: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        html: `${srcFolder}/**/*.pug`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/script/*.js`,
        img: `${srcFolder}/img/*.*`,
        fonts: `${srcFolder}/fonts/*.ttf`
    },
    watch: {
        html: `${srcFolder}/**/*.pug`,
        scss: `${srcFolder}/**/*.scss`,
        js: `${srcFolder}/script/*.js`,
        img: `${srcFolder}/img/*.*`,
        fonts: `${srcFolder}/fonts/*.ttf`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}