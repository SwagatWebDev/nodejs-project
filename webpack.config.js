const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './index.js', // Update entry point
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.bundle.js'
    },
    externals: [nodeExternals()]
};
