//nodejs vision 16.14.2
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'LocalService.js',
        library: "LocalService",
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["@babel/preset-env", {
                            "useBuiltIns": "usage",
                            "modules": false
                        }]
                    ],
                    "plugins": [
                        [
                            "@babel/plugin-transform-runtime", {
                                "corejs": false,
                                "helpers": false,
                                "regenerator": false,
                                "useESModules": false
                            }
                        ]
                    ],
                }
            }
        }]
    },


    devtool: 'source-map'
};