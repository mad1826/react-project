import eslint from '@eslint/js';
import hooksPlugin from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';
import tsdoc from 'eslint-plugin-tsdoc';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config({
	files: [
		'react-project/src/**/*.js',
		'eslint.config.js'
	],
	extends: [
		stylistic.configs['recommended-flat'],
		...tseslint.configs.strict,
		...tseslint.configs.stylistic,
		eslint.configs.recommended
	],
	plugins: {
		'react-hooks': hooksPlugin,
		'@stylistic': stylistic,
		tsdoc,
		react
	},
	rules: {
		...hooksPlugin.configs.recommended.rules,
		'react/jsx-key': 'error',
		'react/self-closing-comp': 'error',
		'@stylistic/arrow-parens': ['error', 'as-needed'],
		'@stylistic/block-spacing': 'error',
		'@stylistic/comma-dangle': ['error', 'never'],
		'@stylistic/eol-last': ['error', 'never'],
		'@stylistic/indent': ['error', 'tab'],
		'@stylistic/jsx-closing-tag-location': 'off',
		'@stylistic/jsx-indent': ['error', 'tab'],
		'@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-line' }],
		'@stylistic/jsx-quotes': ['error', 'prefer-single'],
		'@stylistic/jsx-wrap-multilines': 'off',
		'@stylistic/max-statements-per-line': 'error',
		'@stylistic/member-delimiter-style': ['error', { multiline: { delimiter: 'semi' } }],
		'@stylistic/no-tabs': 'off',
		'@stylistic/quotes': ['error', 'single'],
		'@stylistic/semi': ['error', 'always'],
		'tsdoc/syntax': 'error'
	}
},
{
	languageOptions: {
		globals: {
			...globals.node,
			...globals.browser
		}
	}
});