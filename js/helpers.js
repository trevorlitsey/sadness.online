// https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
export function isScrolledIntoView(el) {
	const rect = el.getBoundingClientRect();
	const elemTop = rect.top;
	const elemBottom = rect.bottom;

	// Only completely visible elements return true:
	// var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	// Partially visible elements return true:
	const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
	return isVisible;
}

export function scrollToNextPage(node) {
	return node.scrollIntoView({ behavior: 'smooth' });
}

export function transitionToWebcam() {

	const yesPage = document.getElementById('yes');
	const webcamPage = document.getElementById('webcam-page');

	window.requestAnimationFrame(() => {
		setTimeout(() => {
			document.querySelector('.black').classList.add('on');
			yesPage.classList.add('off')
		}, 2000);
	});

	// wait 10 second
	setTimeout(() => {
		scrollToNextPage(webcamPage);
		setTimeout(() => {
			window.requestAnimationFrame(() => {
				webcamPage.classList.remove('off');
			});
		}, 400)
	}, 10000)
}

export function getImgSrc(num) {
	if (num >= 99 && num <= 145) {
		return `dist/images/${num}.gif`;
	} else {
		return `dist/images/${num}.jpg`;
	}
}

const picked = [];
export function insertQuizImage(linkNode) {
	const quizImages = [0, 1, 2, 5, 8, 9, 10, 11, 12, 17, 18, 19, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 40, 42, 43, 44, 45, 46, 48, 50, 53];
	const num = quizImages[Math.floor(Math.random() * quizImages.length)];
	if (picked.indexOf(num) > -1) return insertQuizImage(linkNode);
	picked.push(num);
	linkNode.style.backgroundImage = `url('${getImgSrc(num)}')`;
}

export function cycleQuestions(h1Node, questions, speedUp) {

	if (h1Node.isRunning) return;
	h1Node.isStarted = false;
	h1Node.isRunning = true;

	function reset(isRunning, interval) {
		isRunning = false;
		return clearInterval(interval);
	}

	function cycle(speed = 250) {

		let i = 1;
		let count = 0;
		const interval = setInterval(() => {
			let { isStarted, isRunning } = h1Node;
			if (isStarted && !isScrolledIntoView(h1Node)) {
				// stop!
				return reset(isRunning, interval);
			}
			// we have started
			if (!isStarted && isScrolledIntoView(h1Node)) {
				isStarted = true;
			}

			if (!isStarted) return;
			requestAnimationFrame(() => {
				h1Node.innerHTML = questions[i];
				i === questions.length - 1 ? i = 0 : i++;

				if (speedUp && count === 3 && speed > 5) {
					clearInterval(interval);
					const newSpeed = speed < 20 ? 5 : speed - 20;
					h1Node.innerHTML = questions[i];
					return cycle(newSpeed);
				}

				count++
			})
		}, speed);
	}

	setTimeout(cycle, 300);
}

// https://davidwalsh.name/javascript-debounce-function
export function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};