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
              <body>
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
        ],
    },
    cache: true
});