export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'header-max-length': [2, 'always', 77], // github commit without being trucated
		'type-enum': [
			2,
			'always',
			['feat', 'fix', 'release', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'ci', 'build']
		]
	}
}
