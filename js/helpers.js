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

export function scrollToNextPage(scrollTargetHash, userOptions = {}) {
	const options = {
		behavior: 'smooth',
		...userOptions,
	}
	const node = document.querySelector(scrollTargetHash);
	return node.scrollIntoView(options);
}

export function startOver(e) {
	if (e === true || e.keyCode === 66) {
		scrollToNextPage('#sadnessDotOnline', { behavior: 'instant' });
	}
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

	const wrapper = document.querySelector('.wrapper--questions');
	let scale = 1.2;

	if (h1Node.isRunning) return;
	h1Node.isStarted = false;
	h1Node.isRunning = true;

	function reset(isRunning, interval) {
		isRunning = false;
		return clearInterval(interval);
	}

	function cycle(speed = 250) {

		let i = 0;
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

export function play(sound) {
	sound.currentTime = 0;
	sound.play();
}

export function deleteAllPages() {
	document.querySelectorAll('.page').forEach(page => {
		page.remove();
	})
	document.querySelectorAll('[data-delete="true"]').forEach(node => node.remove());
}

export function applyBackgroundMotion(node1, node2) {
	move(node1, .5)
	move(node2, .5, true)
}

export async function displayQuizPage(node, firstInterval) {
	const h1s = node.querySelectorAll('h1');
	const quizLinks = node.querySelectorAll('a');
	await unHideNode(null, firstInterval)
	h1s[0] && await unHideNode(h1s[0], 250)
	h1s[1] && await unHideNode(h1s[1], 1500)
	await unHideNode(quizLinks[0], 1500)
	await unHideNode(quizLinks[1], 500)
	await unHideNode(quizLinks[2], 500)
}

export async function displayFeelings() {
	const feelings = document.querySelector('#feelings-are-never-an-abstraction');
	const h1s = feelings.querySelectorAll('h1');
	const buttons = feelings.querySelector('.bttns');
	await unHideNode(h1s[0], 500)
	await unHideNode(h1s[1], 500)
	await unHideNode(h1s[2], 700)
	await unHideNode(buttons, 800)
}

// ==================
function unHideNode(node, interval) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			node && node.classList.remove('make-transparent');
			return res(true)
		}, interval)
	})
}

function move(node, inc = 1, direction = false) {

	if (direction === true) node.style.top = '-50px';

	const interval = setInterval(() => {

		const currentTop = Number(window.getComputedStyle(node).top.split('px')[0]);
		const newTop = direction ? currentTop + inc : currentTop - inc;

		if (newTop === -50 || newTop === 0) {
			direction = !direction;
		}

		requestAnimationFrame(() => {
			node.style.top = `${newTop}px`;
		})

	}, 100)
}

