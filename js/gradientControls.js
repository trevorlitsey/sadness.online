import gradientConstructor from './gradientConstructor';
import { scrollToNextPage } from './popups/helpers';

const gradient = new gradientConstructor(background);
const background = document.querySelector('scroll-container');
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
			link.click();
		}
	})
}

export function go() {
	gradient.start();
}