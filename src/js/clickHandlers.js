import { webcamWrapper } from './domNodes';
import { alterIncrement } from './renderWebcam';
import { scrollToNextPage, isScrolledIntoView } from './helpers';

export function handleNormalClick(e) {
	e.preventDefault();
	const scrollTarget = document.querySelector(e.target.hash);
	if (scrollTarget) {
		scrollToNextPage(scrollTarget);
	}
}

export function handleQuestionsClick() {
	const h1Node = document.getElementById('questions').querySelector('h1');
	const questions = [
		'Noise becomes signal.',
		'Signal becomes story.',
		'Stories become actions.',
	];
	cycleQuestions(h1Node, questions);
}

export function turnOnModal(modalTargetID) {
	const modal = document.getElementById(modalTargetID);
	requestAnimationFrame(() => modal.classList.remove('off')); // just to be sure..
	requestAnimationFrame(() => modal.classList.add('prep'));
	setTimeout(() => {
		requestAnimationFrame(() => modal.classList.add('on'));
	}, 100);
}

export function turnOffModal(modalNode) {
	modalNode.classList.remove('on');
	modalNode.classList.add('off');
	modalNode.addEventListener('transitionend', () => {
		modalNode.style.display = 'none';
	});
}

export function fadeModalsAndDeleteEverythingButFractalAndWebcam() {
	document.body.style.background = 'white';
	return new Promise(async (resolve, reject) => {
		deleteNodes(document.querySelectorAll('.background-image'));
		fadeNodes('.modal');
		await fadeNodes('.questions');
		deleteEverythingButFractalAndWebcam();
		resolve(true);
	});
}

let started = false;
export async function handleTransitionToWebcam() {
	if (started) return;
	started = true;
	document.body.style.background = 'black';
	await fadeNodes('.modal--fractal');
	deleteNodes(document.querySelectorAll('.modal--fractal'));

	const webcamPage = document.getElementById('webcam-page');

	// wait 8 seconds
	setTimeout(() => {
		document.body.style.marginTop = 0;
		scrollToNextPage('#webcam-page');
		setTimeout(() => {
			window.requestAnimationFrame(() => {
				webcamPage.classList.remove('off');
				webcamPage.classList.add('on');
			});
		}, 400);
	}, 4000);
}

export function handleDeleteBackground() {
	deleteNodes(document.querySelectorAll('.background-image'));
}

export function handleKeyUp(e) {
	const currentBrightness = Number(
		window.getComputedStyle(webcamWrapper).filter.match(/\d+\.\d+|\d+/)[0]
	);

	// up
	if (e.keyCode === 38) {
		const newBrightness = `brightness(${(currentBrightness + 0.05).toFixed(
			2
		)})`;
		webcamWrapper.style.filter = newBrightness;
		console.log(`brightness is now ${newBrightness}`);
	}
	// down
	else if (e.keyCode === 40) {
		const newBrightness = `brightness(${(currentBrightness - 0.05).toFixed(
			2
		)})`;
		webcamWrapper.style.filter = newBrightness;
		console.log(`brightness is now ${newBrightness}`);
	}
	// left
	else if (e.keyCode === 37) {
		const newIncrement = alterIncrement(-5);
		console.log('increment is now ' + newIncrement);
	}
	// right
	else if (e.keyCode === 39) {
		const newIncrement = alterIncrement(+5);
		console.log('increment is now ' + newIncrement);
	}
}

// ------------
function fadeNodes(query) {
	return new Promise((res, rej) => {
		document.querySelectorAll(query).forEach(node => {
			node.classList.add('final-off');
			node.addEventListener('transitionend', () => {
				res(true);
			});
		});
	});
}

function deleteNodes(nodes) {
	nodes.forEach(node => {
		node.remove();
	});
}

function deleteEverythingButFractalAndWebcam() {
	deleteNodes(document.querySelectorAll('[data-delete="true"]'));
	deleteNodes(document.querySelectorAll('.modal'));
	deleteNodes(document.querySelectorAll('horizontal-scroll'));
	deleteNodes(document.querySelectorAll('.page'));
}

function cycleQuestions(h1Node, questions) {
	let scale = 1.2;
	let cycles = 0;

	if (h1Node.isRunning) return;

	h1Node.isStarted = false;
	h1Node.isRunning = true;

	// go
	setTimeout(cycle, 300);

	// -----------
	function reset(h1Node, interval) {
		h1Node.isStarted = false;
		h1Node.isRunning = false;
		return clearInterval(interval);
	}

	function cycle(speed = 250, cycleInterval = 3) {
		const wrapper = document.querySelector('.wrapper--questions');

		let i = 0;
		let count = 0;

		const interval = setInterval(() => {
			const { isStarted, isRunning } = h1Node;

			// stop!
			if (isStarted && !isScrolledIntoView(h1Node)) {
				return reset(h1Node, interval);
			}

			// we have started
			if (!isStarted && isScrolledIntoView(h1Node)) {
				h1Node.isStarted = true;
			}

			// wait till element is in view to start
			if (!isStarted) return;

			requestAnimationFrame(() => {
				h1Node.innerHTML = questions[i];

				i === questions.length - 1 ? (i = 0) : i++;

				if (cycles > 4) {
					scale += 0.01;
					wrapper.style.transform = `scale(${scale})`;
				}

				if (count === cycleInterval && speed > 5) {
					clearInterval(interval);
					h1Node.innerHTML = questions[i];
					const newSpeed = speed < 20 ? 5 : speed - 20;
					cycles++;
					return cycle(newSpeed);
				}

				count++;
			});
		}, speed);
	}
}
