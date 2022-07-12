module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['plugin:react/recommended', 'airbnb-typescript', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        indent: 'off',
        curly: ['warn', 'multi-line'],
        radix: 'off',
        'arrow-parens': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-cycle': 'off',
        'import/no-absolute-path': 'off',
        'no-prototype-builtins': 'off',
        'prettier/prettier': 'error',
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        // TODO - Get team preferences on below rules
        'nonblock-statement-body-position': ['error', 'beside'],
        'no-trailing-spaces': 'off',
        'operator-linebreak': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        'max-len': 'off',
        'comma-dangle': 'off',
        'no-console': 'off',
        'function-paren-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'arrow-body-style': 'off',
        'one-var': 'off',
        'consistent-return': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'object-curly-newline': 'off',
        'react/no-array-index-key': 'off',
        'react/no-unescaped-entities': 'off',
        'no-use-before-define': 'off',
        'no-alert': 'off',
        'class-methods-use-this': 'off',
        'no-fallthrough': 'off',
        'react/jsx-props-no-spreading': 'warn',
        camelcase: 'off',
        'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
        '@typescript-eslint/naming-convention': 'off',
        'react/require-default-props': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
};
