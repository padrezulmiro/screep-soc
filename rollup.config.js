'use strict';

import typescript from 'rollup-plugin-typescript2';

export default {
    input: './src/main.ts',

    output: {
        dir: './dist',
        plugins: [
            typescript({
                tsconfig: './tsconfig.json'
            })
        ]
    }
}
