//nodejs vision 16.14.2
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'LocalService.js',
        library: "LocalService",
        libraryTarget: 'umd',
        // libraryExport: 'default'
    },
    module: {
        //当遇到.mjs或者.js时导入babel-polify，将import from转换为require
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["@babel/preset-env", {
                            modules: 'auto'
                        }],
                    ],
                    "plugins": [
                        [
                            "@babel/plugin-transform-runtime", {
                                "useESModules": false,
                                corejs: 3,
                            }
                        ]
                    ],
                }
            }
        }]
    },
    devtool: 'source-map'
};