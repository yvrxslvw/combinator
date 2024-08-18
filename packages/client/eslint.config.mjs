import typescriptParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from 'typescript-eslint';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
	{
		languageOptions: {
			globals: { browser: true, es2020: true, node: true },
			parser: typescriptParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 2021,
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
			'react-refresh': reactRefreshPlugin,
			'react-hooks': reactHooksPlugin,
		},
		files: ['src/**/*.ts[x]'],
		rules: {
			'import/prefer-default-export': 0,
			'import/no-unresolved': 0,
			'import/no-extraneous-dependencies': 0,
			semi: 2,
			'no-console': 1,
			'no-multi-spaces': 2,
			'space-infix-ops': 2,
			'arrow-spacing': 2,
			'func-style': [2, 'expression'],
			indent: [2, 'tab', { SwitchCase: 1 }],
			'eol-last': 2,
			'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0 }],
			'react-hooks/exhaustive-deps': 0,
			'react/react-in-jsx-scope': 0,
		},
	},
];
