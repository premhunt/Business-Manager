const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/* Allow multiple Laravel Mix applications */
require('laravel-mix-merge-manifest');
mix.mergeManifest();

mix.disableNotifications();

mix.options({
    processCssUrls: false,
    postCss: [require('autoprefixer')],
    uglify: {
      uglifyOptions: {
        warnings: false,
        parse: {},
        compress: {},
        mangle: true,
        output: null,
        toplevel: true,
        nameCache: null,
        ie8: true,
        keep_fnames: false,
      }
    },
});

mix
	 /* App assets */
   .js('resources/js/app/main.js', 'public/assets/js/app.js')
   .sass('resources/sass/app/main.scss', 'public/assets/css/app.css')

	 /* WYSIWYG assets */
   .js('resources/js/wysiwyg/main.js', 'public/assets/js/wysiwyg.js')
   .sass('resources/sass/wysiwyg/main.scss', 'public/assets/css/wysiwyg.css')

	 /* Spreadsheet assets */
   .js('resources/js/spreadsheet/main.js', 'public/assets/js/spreadsheet.js')
   .sass('resources/sass/spreadsheet/main.scss', 'public/assets/css/spreadsheet.css')

	 /* PDF assets */
   .sass('resources/sass/pdf/main.scss', 'public/assets/css/pdf.css')
;