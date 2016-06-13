module.exports = {
    entry: './myjet.ts',
    output: {
        filename: 'myjet.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    watchOptions: {
        aggregateTimeout: 500
    }
}