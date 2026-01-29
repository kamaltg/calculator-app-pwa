module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,js,html,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};