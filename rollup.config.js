import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'main.js',
    output: {
        file: 'bundle.js',
        format: 'iife',
        sourcemap: true,
        globals: {
            path: 'window',
            fs: 'window',
            crypto: 'window',
            child_process: 'window'
        }
    },
    plugins: [
        resolve(),
        commonjs(),
    ],
    external: [
        'path',
        'fs',
        'crypto',
        'child_process'
    ]
}