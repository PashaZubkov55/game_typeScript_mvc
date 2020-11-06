const  path = require('path')

module.exports = {
    context: path.join(__dirname, './src'),
    entry: './index.ts',
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
            },

        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }

}