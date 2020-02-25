import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const plugins = [
    resolve({
        browser: true,
    }),
    commonjs(),
];

const production = {
    input: './node_modules/@mparticle/web-kit-wrapper/index.js',
    output: {
        exports: 'named',
        strict: true,
    },
    plugins: plugins,
};

const testEndToEnd = {
    input:
        './node_modules/@mparticle/web-kit-wrapper/end-to-end-testapp/index.js',
    output: {
        exports: 'named',
        strict: true,
    },
    plugins: plugins,
};

export { production, testEndToEnd };
