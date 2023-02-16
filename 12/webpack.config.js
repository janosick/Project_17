const path = require('path');
const webpack = require('webpack');

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: {
        index: './index',
        shop: './shop',
        profile: './profile',
        vendor: ['jquery', 'lodash']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common', 'vendor'],
            minChunks: 2
        })
    ]
};
