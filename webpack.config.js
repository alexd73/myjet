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
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }

        ]
    },

    watchOptions: {
        aggregateTimeout: 500
    }
}