const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

function sparanwrap(node) {
	return node.innerHTML
		.split('')
		.map(letter => `<span>${letter}</span>`)
		.join('');
}

function rouletteRandomLetters(span, int) {
	const origLetter = span.innerHTML;
	if (origLetter === ' ') return;
	setTimeout(() => {
		let i = 0
		const interval = setInterval(() => {
			span.innerHTML = letters[Math.floor(Math.random() * letters.length)];
			i++;
			if (i > 80 + int * 1) {
				span.innerHTML = origLetter;
				clearInterval(interval);
			}
		}, 30);
	}, 0 * int)
}

function jumbler(tag) {
	tag.innerHTML = sparanwrap(tag);
	const spans = tag.querySelectorAll('span');
	spans.forEach((span, indx) => {
		rouletteRandomLetters(span, indx)
	})
}

export default jumbler;