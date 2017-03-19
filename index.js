const stripAnsi = require('strip-ansi');
const is2dArray = require('is-2d-array');

function leftAlign(lines, padding) {
	if (!is2dArray(lines)) {
		throw new TypeError('Expecting a 2D array of ASCII text');
	}

	if (!padding) {
		padding = 4;
	}

	const lengths = [];
	const leftAligned = [];

	lines.forEach(line => {
		line.forEach((word, key) => {
			lengths[key] = Math.max(stripAnsi(word).length, lengths[key] ? lengths[key] : 0);
		});
	});

	lines.forEach((line, k) => {
		leftAligned.push(
			line.reduce((prev, next, key) => {
				return prev + next + ' '.repeat(lengths[key] - next.length + padding);
			}, '')
		);

		leftAligned[k] = leftAligned[k].trim();
	});

	return leftAligned.join('\n');
}

module.exports = leftAlign;
