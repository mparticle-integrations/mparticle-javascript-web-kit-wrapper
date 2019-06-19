import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './node_modules/@mparticle/web-kit-wrapper/index.js',
    output: {
        format: 'umd',
        exports: 'named',
        strict: false,
    },
    plugins: [
        resolve({
            browser: true
        }),
        commonjs()
    ],
};
