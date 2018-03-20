const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
let isRunning = false;

function sparanwrap(node) {
	const isSpanned = node.innerHTML[0] === '<';
	if (!isSpanned) {
		return node.innerHTML
			.split('')
			.map(letter => `<span>${letter}</span>`)
			.join('');
	} else {
		return node.innerHTML;
	}
}

function rouletteRandomLetters(span, int) {
	const origLetter = span.innerHTML;
	if (origLetter === ' ') return;
	setTimeout(() => {
		let i = 0
		const interval = setInterval(() => {
			window.requestAnimationFrame(() => {
				span.innerHTML = letters[Math.floor(Math.random() * letters.length)];
				i++;
				if (i > 75 + int * 5) {
					span.innerHTML = origLetter;
					clearInterval(interval);
					isRunning = false;
				}
			}, 40);
		})
	}, 0 * int)
}

function jumbler(tag) {
	if (isRunning) return;
	isRunning = true;
	tag.innerHTML = sparanwrap(tag);
	const spans = tag.querySelectorAll('span');
	spans.forEach((span, indx) => {
		rouletteRandomLetters(span, indx)
	})
}

export default jumbler;