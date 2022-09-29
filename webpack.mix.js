const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 // ********** front Assets **********

mix.js('resources/js/app.js', 'public/js').postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
]);

mix.styles([
    'resources/assets/vendor/jquery-toast-plugin/jquery.toast.min.css',
    'resources/front/css/style.css',
    'resources/front/css/custom.css',
    'resources/front/css/font-icons.css'
], 'public/front_assets/css/style.css');
mix.styles([
    'resources/front/fonts/icomoon/style.css',
], 'public/front_assets/fonts/icomoon/style.css');

mix.scripts([
    'resources/assets/vendor/jquery-toast-plugin/jquery.toast.min.js',
    'resources/front/js/main.js',
    'resources/front/js/functions.js'
], 'public/front_assets/js/main.js');
mix.scripts([
    'resources/assets/vendor/jquery-toast-plugin/jquery.toast.min.js'
], 'public/front_assets/js/plugins.js');
mix.copyDirectory([
    'resources/front/images',
], 'public/front_assets/images');
mix.copyDirectory([
    'resources/front/css/fonts',
], 'public/front_assets/css/fonts');
mix.copy('resources/front/js/plugins.bootstrap.js', 'public/js/plugins.bootstrap.js');
mix.copy('resources/front/js/plugins.easing.js', 'public/js/plugins.easing.js');


// ********** Admin Assets **********

mix.styles([
    'resources/assets/css/styles.css',
    'resources/assets/css/admin-style.css',
    'resources/assets/vendor/jquery-toast-plugin/jquery.toast.min.css'
], 'public/admin_assets/css/styles.css');
mix.styles([
    'resources/assets/css/rtl.css',
], 'public/admin_assets/css/rtl.css');
mix.styles([
    'resources/assets/vendor/bootstrap/css/bootstrap.min.css',
    'resources/assets/vendor/fontawesome-free/css/all.min.css',
], 'public/admin_assets/css/plugins.css');
mix.copyDirectory([
    'resources/assets/vendor/fontawesome-free/webfonts',
], 'public/admin_assets/webfonts');
mix.scripts([
    'resources/assets/js/jquery-3.4.1.min.js',
], 'public/admin_assets/js/jquery-3.4.1.min.js');
mix.scripts([
    'resources/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
    'resources/assets/vendor/jquery-toast-plugin/jquery.toast.min.js',
    'resources/assets/vendor/tinymce/tinymce.min.js',
], 'public/admin_assets/js/plugins.js');
mix.scripts([
    'resources/assets/js/scripts.js',
], 'public/admin_assets/js/scripts.js');
mix.copyDirectory([
    'resources/assets/vendor/tinymce/themes/silver',
], 'public/admin_assets/js/themes/silver');
mix.copyDirectory([
    'resources/assets/vendor/tinymce/plugins',
], 'public/admin_assets/js/plugins');
mix.copyDirectory([
    'resources/assets/vendor/tinymce/skins',
], 'public/admin_assets/js/skins');