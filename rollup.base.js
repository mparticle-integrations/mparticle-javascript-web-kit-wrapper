import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './node_modules/@mparticle/web-kit-wrapper/index.js',
    output: {
        exports: 'named',
        strict: true,
    },
    plugins: [
        resolve({
            browser: true,
        }),
        commonjs(),
    ],
};
