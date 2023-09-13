const  path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin= require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack")
module.exports = {
    mode:"development",
    entry: ["@babel/polyfill","./src/index.jsx"],
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[hash].js",
        publicPath: '/',
    },
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        port: 3000,
        open:true,
        hot:true
    },
    resolve: {
        extensions: ['.js',".jsx"],
    },
    plugins: [
        new HTMLWebpackPlugin({template:"./src/index.html"}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
    ,
    module: {
        rules: [
            {
                test:/\.(css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
                exclude: /node_module/
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use:["file-loader"],
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env',"@babel/preset-react"]
                    }
                }
            },
        ]
    }

}