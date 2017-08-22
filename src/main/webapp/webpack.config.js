var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('.', 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react-es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};