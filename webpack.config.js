const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const conf = {
    entry: {
        app: "./src/ts/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },

    devServer: {
        overlay: true
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
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]

                /*use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    /!*{
                        loader: "less-loader",
                        options: { sourceMap: true }
                    }*!/
                ]*/
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
        })


    ]
};

module.exports = (env, option) => {
    let production = option.mode === "production";
    conf.devtool = production ? "source-map" : "eval-sourcemap";
    return conf;
};

