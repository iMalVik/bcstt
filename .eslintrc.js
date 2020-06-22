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
        indent: [
            'warn',
            4,
            {
                MemberExpression: 1,
            },
        ],
        'vue/html-indent': [
            'warn',
            4,
            {
                baseIndent: 1,
            },
        ],
        'vue/script-indent': [
            'warn',
            4,
            {
                baseIndent: 1,
            },
        ],
        'vue/max-attributes-per-line': ['error', {
            singleline: 5,
            multiline: {
                max: 1,
                allowFirstLine: true,
            },
        }],
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
