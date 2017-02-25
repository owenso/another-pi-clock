var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', './client/src/index.js'],
    output: {
        path: path.join(__dirname, 'client', 'public', 'js', 'build'),
        publicPath: '/js/build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: ["transform-decorators-legacy"]
                }
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.svg$/,
                loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]'
            },
            {
                test: /\.woff$/,
                loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]'
            },
            {
                test: /\.woff2$/,
                loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]'
            },
            {
                test: /\.[ot]tf$/,
                loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
            },
            {
                test: /\.eot$/,
                loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.woff(2)?(\?[a-z0-9]+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
                loader: "file-loader"
            }
        ]
    },
    devTool: 'eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx', 'scss']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};