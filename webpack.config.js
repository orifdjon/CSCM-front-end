const path = require("path");


const htmlWebpackPlugin = require('html-webpack-plugin');
const paths = {
    src: path.resolve(__dirname, "src"),
    dist: path.resolve(__dirname, "build")
};

const conf = {
    context: paths.src,

    entry: {
        app: "./src/ts/index.tsx"
    },
    output: {
        path: paths.dist,
        filename: "[name].bundle.js"
    },

    /*devServer: {
        overlay: true
    },*/


    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    // watch: true,

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
        )
    ]
};

module.exports = (env, option) => {
    let production = option.mode === "production";
    conf.devtool = production ? "source-map" : "eval-sourcemap";
    return conf;
};

