import './webcam';
import './welcomePage';
import startSpeechDetection from './startSpeechDetection';
import gradientConstructor from './gradientConstructor';
import handlePopupClick from './popups/handlePopupClick';
import { isScrolledIntoView } from './helpers';
import { scrollToNextPage } from './popups/helpers';

import '../css/style.css'

const popupTriggers = document.querySelectorAll('.trigger');
const yesBttns = document.querySelectorAll('.bttn--yes');
const yesPage = document.querySelector('#yes');
const webcamPage = document.querySelector('#webcam-page');
const background = document.querySelector('scroll-container');

const gradient = new gradientConstructor(background);

function go() {
	gradient.start();
}

function transitionToWebcam() {
	gradient.stop();
	yesPage.classList.add('off');
	setTimeout(() => {
		scrollToNextPage('#webcam-page');
		setTimeout(() => {
			webcamPage.classList.remove('off');
		}, 200)
	}, 8000)
}

function handleKeywordFound() {
	const links = document.querySelectorAll('.next');
	links.forEach(link => {
		if (isScrolledIntoView(link)) {
			console.log(link);

			// const event = new Event('click')
			link.click();
		}
	})
}

startSpeechDetection(handleKeywordFound);

popupTriggers.forEach(trigger => trigger.addEventListener('click', handlePopupClick));
yesBttns.forEach(bttn => bttn.addEventListener('click', transitionToWebcam));
window.addEventListener('load', go);

// where to scroll on default
// setTimeout(() => {
// 	document.getElementById('yes').scrollIntoView();
// }, 300)

