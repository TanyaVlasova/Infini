import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(sass({
            outputStyle: 'expanded'})
        )
        .pipe(app.plugins.replace('../', ''))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}