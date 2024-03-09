const mix = require('laravel-mix');
const path = require('path');
const tailwindcss = require('tailwindcss');

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
        ],
    },
});

mix.js('resources/js/app.js', 'public/js')
    .options({
        postCss: [tailwindcss],
        processCssUrls: false,
    });
