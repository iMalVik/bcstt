module.exports = {
    root: true,
    
    env: {
        node: true,
    },
    
    extends: [
        'plugin:vue/strongly-recommended',
        '@vue/standard',
        'eslint:recommended',
    ],
    
    parserOptions: {
        parser: 'babel-eslint',
    },
    
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'comma-dangle': ['warn', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'never',
            exports: 'never',
            functions: 'never',
        }],
        'no-trailing-spaces': ['warn', { skipBlankLines: true }],
        'no-multi-spaces': 'off',
        'space-in-parens': ['error', 'never'],
        // 'comma-dangle': [ 'error', 'always-multiline' ],
        indent: [
            'warn',
            4,
            {
                MemberExpression: 1,
            },
        ],
        
        'vue/script-indent': [
            'warn',
            4,
            {
                baseIndent: 1,
                switchCase: 0,
                ignores: [],
            },
        ],
    },
    
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
}
