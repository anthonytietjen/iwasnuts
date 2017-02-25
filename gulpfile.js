const gulp = require("gulp");
const sass = require("gulp-sass");
const typescript = require("gulp-tsc");

const sassPaths = ['./static/*.scss']; // Don't include the node_modules folder
const tsPaths = ['./server.ts', './app/**/*.ts']; // Don't include the node_modules folder

gulp.task('task-typescript', () => {
	gulp.src(tsPaths, {base: '.'})
	.pipe(typescript({
		tmpDir: '.tmp'
	}))
	.pipe(gulp.dest('.'));
});

gulp.task('task-sass', () => {
	gulp.src(sassPaths)
	.pipe(sass())
	.pipe(gulp.dest(f => f.base));
});

gulp.task('watch-tsc', () => {
	gulp.watch(tsPaths, ['task-tsc']);
});

gulp.task('watch-sass', () => {
	gulp.watch(sassPaths, ['task-sass']);
});

gulp.task('watch-ts-and-sass-debug', () => {
	gulp.watch(sassPaths, ['task-sass']);
	gulp.watch(tsPaths, ['task-typescript']);
});