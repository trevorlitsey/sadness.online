const config = {
	fadeOutStart: 900,
	fadeOutSpeed: 54,
};

function jumbler(node) {
	if (node.isRunning) return;

	const origHTML = node.innerHTML;
	const origText = node.innerText;
	setNodeStyles(node);

	const animationStart = Date.now();
	requestAnimationFrame(cycle);

	let currentAnimationFrame;

	function cycle() {
		const now = Date.now();
		if (
			now >
			animationStart +
				config.fadeOutStart +
				origText.length * config.fadeOutSpeed
		) {
			// stop
			cancelAnimationFrame(currentAnimationFrame); // just in case
			return resetNodeStyles(node, origHTML);
		} else if (now > animationStart + config.fadeOutStart) {
			// jumble appropriate amount of letters
			const index = Math.floor(
				((now - (animationStart + config.fadeOutStart)) /
					(origText.length * config.fadeOutSpeed)) *
					origText.length
			);
			node.innerHTML =
				origText.slice(0, index) + jumbleString(origText.slice(index));
		} else {
			// jumble all letters
			node.innerHTML = jumbleString(origText);
		}
		currentAnimationFrame = requestAnimationFrame(cycle);
	}
}

function setNodeStyles(node) {
	node.isRunning = true;
	const minHeight = node.getBoundingClientRect().height;
	node.style.height = `${minHeight}px`;
	node.style.wordBreak = 'break-all';
}

function resetNodeStyles(node, resetText) {
	node.style.height = `auto`;
	node.style.wordBreak = 'normal';
	node.innerHTML = resetText;
	node.isRunning = false;
}

export function jumbleString(str) {
	return str
		.trim()
		.split(' ')
		.map(jumbleWord)
		.join(' ');
}

export function jumbleWord(word) {
	return Array.from({ length: word.length }, getRandomLetter).join('');
}

export function getRandomLetter(letters = 'abcdefghijklmnopqrstuvwxyz') {
	return letters.split('')[Math.floor(Math.random() * letters.length)];
}

export default jumbler;
