const htmlWebpackPlugin = require('html-webpack-plugin');


const { resolve } = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devtool: 'source-map',
    plugins: [
        new htmlWebpackPlugin({
            template: resolve(__dirname, 'src/index.html')
        })
    ],
    devServer: {
        contentBase: './',
    }
}