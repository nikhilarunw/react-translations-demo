const gulp = require('gulp')
const babel = require('gulp-babel')
const po2json = require('gulp-po2json')

const LOCALES_DIR = 'locales/'
const JED_FORMAT = 'jed1.x'

gulp.task('extract-strings', () => {
  return gulp.src(['src/components/*.js', 'routes/*.js'])
    .pipe(babel({
      plugins: ['syntax-jsx', ['extract-text', {
        outputFile: 'locales/en-US.po',
        includeReference: true,
        baseDir: __dirname,
        headers: {
          'po-revision-date': new Date().toISOString(),
        },
        component: {
          name: 'Message',
        },
      }]],
    })
      .on('error', (err) => {
        console.error(err)
      }))
})

gulp.task('import-fr', () => {
  return gulp.src(['locales/fr.po'])
    .pipe(po2json({ format: JED_FORMAT, domain: 'fr' }))
    .pipe(gulp.dest(LOCALES_DIR))
})

gulp.task('import-en-US', () => {
  return gulp.src(['locales/en-US.po'])
    .pipe(po2json({ format: JED_FORMAT, domain: 'en-US' }))
    .pipe(gulp.dest(LOCALES_DIR))
})

gulp.task('import-strings', ['import-en-US', 'import-fr'])
