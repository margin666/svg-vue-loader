// const {resolve} = require('path')
import {terser} from 'rollup-plugin-terser'
export default {
    input: './packages/svg-vue-loader.js',
    output: [
        {
            file: './dist/svg-vue-loader.js',
            format: 'cjs'
        },
    ],
    plugins: [
        terser(),
    ]
}