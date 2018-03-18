import gradientConstructor from './gradientConstructor';
import { scrollToNextPage } from '../helpers';
import { isScrolledIntoView } from '../helpers';

const background = document.body;
const gradient = new gradientConstructor(background);
const yesPage = document.querySelector('#yes');
const webcamPage = document.querySelector('#webcam-page');

export function transitionToWebcam() {
	gradient.stop();
	window.requestAnimationFrame(() => yesPage.classList.add('off'));
	setTimeout(() => {
		scrollToNextPage(webcamPage);
		setTimeout(() => {
			window.requestAnimationFrame(() => {
				webcamPage.classList.remove('off');
			});
		}, 400)
	}, 10000)
}

export function handleKeywordFound() {
	const links = document.querySelectorAll('.next');
	links.forEach(link => {
		if (isScrolledIntoView(link)) {
			// go to there
			link.click();
		}
	})
}

export function startGradient() {
	gradient.start();
}