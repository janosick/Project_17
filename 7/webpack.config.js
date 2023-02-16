const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: './a',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devtool: 'source-map'
};