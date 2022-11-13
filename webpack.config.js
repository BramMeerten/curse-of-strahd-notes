const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/public',
        filename: 'app.js',
        publicPath: __dirname + '/public',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'ts-loader'},
            {test: /\.css$/i, use: ["style-loader", "css-loader"]},
            {test: /\.otf$/i, use: [{loader: 'file-loader', options: {name: '[name].[ext]'}}]},
            {test: /\.(png|svg|jpg|jpeg|gif)$/i, use: [{loader: 'file-loader', options: {name: '/img/[name].[ext]'}}]},
        ]
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
}
