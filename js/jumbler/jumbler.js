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

function rouletteRandomLetters(span, int, waitForResolve) {
	return new Promise((res, rej) => {
		const origLetter = span.innerHTML;
		if (origLetter === ' ') return;

		if (!waitForResolve) res(true)

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
						return res(true);
					}
				}, 40);
			})
		}, 0 * int)
	})
}

function jumbler(node) {
	if (isRunning) return;
	isRunning = true;
	const minHeight = node.getBoundingClientRect().height;
	const origText = node.innerHTML;
	node.style.height = `${minHeight}px`;
	node.style.wordBreak = 'break-all';
	node.innerHTML = sparanwrap(node);
	const spans = node.querySelectorAll('span');
	spans.forEach(async (span, index) => {
		if (index === spans.length - 1) {
			// last one
			await rouletteRandomLetters(span, index, true)
			node.style.height = `auto`;
			node.style.wordBreak = 'normal';
			node.innerHTML = origText;
		} else {
			rouletteRandomLetters(span, index)
		}
	})
}

export default jumbler;