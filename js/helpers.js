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
		yesPage.classList.add('off')
	});
	setTimeout(() => {
		scrollToNextPage(webcamPage);
		setTimeout(() => {
			window.requestAnimationFrame(() => {
				webcamPage.classList.remove('off');
			});
		}, 400)
	}, 10000)
}

function getQuizImgSrc() {
	const quizImages = [0, 1, 2, 5, 8, 9, 10, 11, 12, 17, 18, 19, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 40, 42, 43, 44, 45, 46, 48, 50, 53];
	const num = quizImages[Math.floor(Math.random() * quizImages.length)];

	if (num >= 99 && num <= 145) {
		return `url('dist/images/${num}.gif')`;
	} else {
		return `url('dist/images/${num}.jpg')`;
	}
}

export function insertQuizImage(linkNode) {
	linkNode.style.backgroundImage = getQuizImgSrc();
}

export function cycleQuestions(h1Node, questions) {

	if (h1Node.isRunning) return;
	h1Node.isStarted = false;
	h1Node.isRunning = true;


	function cycle() {
		let i = 1;
		const interval = setInterval(() => {
			let { isStarted, isRunning } = h1Node;
			if (isStarted && !isScrolledIntoView(h1Node)) {
				isRunning = false;
				return clearInterval(interval);
			}
			// we have started
			if (!isStarted) isStarted = true;
			requestAnimationFrame(() => {
				h1Node.innerHTML = questions[i];
				i === questions.length - 1 ? i = 0 : i++;
			})
		}, 250);
	}

	setTimeout(cycle, 500);
}