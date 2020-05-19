const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].min.js',
        path: path.join(__dirname, 'dist'),
    }
};
