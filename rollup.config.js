const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const path = require('path');
const chokidar = require('chokidar');
const babelConfig = require('./babel.config');



/**
 * [esm、ts编译]
 * @return {[type]} [void]
 */
const rollupCompile = {

    // 配置
    input: 'src/components/index.js',
    output: {
        name: 'saber',
        file: 'dist/saber.js',
        format: 'umd'
    },
    plugins: [  
        commonjs({
            namedExports: {
                'node_modules/react/index.js': ['useState']
            }            
        }),
        resolve({
            extensions: [ '.ts', '.js', '.jsx']
        }),        
        babel(babelConfig)
    ]


}


// rollup编译
module.exports = rollupCompile;



