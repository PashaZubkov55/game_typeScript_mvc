const  path = require('path')

module.exports = {
    entry: './src/index.ts',
    mode:'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts' ,'js']
    },
    devtool: 'source-map',
    module:{
        rules:  [
            {
                test:/\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }

}