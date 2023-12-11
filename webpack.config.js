import { buildWebpack } from './config/build/buildWebpack.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {
    const paths = {
        output: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'index.js'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        assetsFrom: path.resolve(__dirname, 'src/assets'),
        assetsTo: path.resolve(__dirname, 'dist/src/assets'),
    }
    const config = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths
    })
    return config
} 