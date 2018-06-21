const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');


const conf = {
    entry: {
        app: "./src/ts/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },

    devServer: {
        overlay: true,
        hot: true,
        inline: true,
        port: 9001,
        open: true
    },



    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".less", "css"]
    },

    watch: true,

    module: {
        rules: [
            {
                test: /\.tsx|ts?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "resolve-url-loader", "sass-loader"]

            }

        ],

    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new htmlWebpackPlugin(
            {
                template: "./index.html"
            }
        ),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new webpack.HotModuleReplacementPlugin({

        })


    ]
};

module.exports = (env, option) => {
    let production = option.mode === "production";
    conf.devtool = production ? "source-map" : "cheap-module-source-map";
    return conf;
};

