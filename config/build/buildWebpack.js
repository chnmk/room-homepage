import { buildPlugins } from './buildPlugins.js';
import { buildLoaders } from './buildLoaders.js';
import { buildDevServer } from './buildDevServer.js';

export function buildWebpack(options) {
    const isDev = options.mode === 'development';

    return {
        mode: options.mode ?? "development",
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}