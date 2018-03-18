import gradientConstructor from './gradientConstructor';
import { scrollToNextPage } from '../popups/helpers';
import { isScrolledIntoView } from '../helpers';

const background = document.querySelector('body');
const gradient = new gradientConstructor(background);
const yesPage = document.querySelector('#yes');
const webcamPage = document.querySelector('#webcam-page');

export function transitionToWebcam() {
	gradient.stop();
	yesPage.classList.add('off');
	setTimeout(() => {
		scrollToNextPage('#webcam-page');
		setTimeout(() => {
			webcamPage.classList.remove('off');
		}, 200)
	}, 8000)
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