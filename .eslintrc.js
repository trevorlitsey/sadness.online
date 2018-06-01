module.exports = {
	env: {
		commonjs: true,
		es6: true,
	},
	extends: 'plugin:prettier/recommended',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
		sourceType: 'module',
	},
	parser: 'babel-eslint',
};
