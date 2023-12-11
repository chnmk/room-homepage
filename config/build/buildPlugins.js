import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export function buildPlugins(options) {
    const isDev = options.mode === 'development';

    return [
        new HtmlWebpackPlugin({ 
            template: options.paths.html 
        }),
        !isDev && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new CopyPlugin({
            patterns: [{
              from: options.paths.assetsFrom,
              to: options.paths.assetsTo
            }]
          }),
    ]
}