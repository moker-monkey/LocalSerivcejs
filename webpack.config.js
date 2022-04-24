//nodejs vision 16.14.2
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'none',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'LocalService.js',
        library:"LocalService",
        libraryTarget: 'umd',
    },
    
    devtool: 'source-map'
};