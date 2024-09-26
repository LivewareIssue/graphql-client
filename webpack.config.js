const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylexPlugin = require('@stylexjs/webpack-plugin');
const path = require("path");

module.exports = (env, argv) => ({
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: "bundle.[fullhash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new StylexPlugin({
            filename: 'styles.[contenthash].css',
            dev: argv.mode === 'development',
            runtimeInjection: false,
            classNamePrefix: 'x',
            unstable_moduleResolution: {
                type: 'commonJS',
                rootDir: __dirname,
            },
        }),
        new HtmlWebpackPlugin({
            templateContent: `
            <html>
                <head>
                    <link rel="stylesheet" href="global.css">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
                </head>
                <body style="margin: 0;">
                    <div id="root"></div>
                </body>
            </html>
          `
        }
        ),
    ],
    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: ["file-loader"]
            },
            {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                  url: true,
                },
            },
        ],
    },
    cache: true,
    devServer: {
        historyApiFallback: true,
    }
});