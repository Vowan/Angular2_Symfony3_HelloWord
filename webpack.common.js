var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
//var helpers = require('./helpers');



module.exports = {
    entry: {
      'polyfills': './src/polyfills.ts',
       'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    output: {
        // path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        path: 'web/build/',
        publicPath: '/build'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [{
                        loader: 'awesome-typescript-loader',
                        options: {configFileName: './src/tsconfig.json'}
                    }, 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: './src/app',
                loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap'})
            },
            {
                test: /\.css$/,
                include: './src/app',
                loader: 'raw-loader'
            }
        ]
    },

    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};


