const
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const
    publicFolder = path.resolve(__dirname, 'public'),
    srcFolder = path.resolve(__dirname, 'src');

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : false,
    entry: ['./src/main.scss'],
    output: {
        filename: process.env.NODE_ENV !== 'production' ? '[hash].bundle.js' : '[hash].bundle.min.js',
        publicPath: '/',
        path: publicFolder,
    },
    module: {
        loaders: [
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }],
                })
            },
            {
                test: /\.(jpg|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(srcFolder, 'index.html')
        }),
        new ExtractTextPlugin({
            filename: process.env.NODE_ENV !== 'production' ? '[hash].styles.css' : '[hash].style.min.css',
            allChunks: true,
            disable: process.env.NODE_ENV === 'development'
        }),
    ],
    devServer: {
        host: 'localhost',
        port: 1234,
        inline: false,
        contentBase: publicFolder,
    },
};
