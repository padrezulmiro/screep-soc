'use strict';

import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import screeps from 'rollup-plugin-screeps';
import cfg from "./.screeps.json" assert { type: "json" };

export default {
    input: './src/main.ts',

    output: {
        file: "dist/main.js",
        format: "cjs",
        sourcemap: true,
    },

    plugins: [
        clear({ targets: ["dist"] }),
        resolve({ rootDir: "src" }),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        screeps({config: cfg})
    ]
}
