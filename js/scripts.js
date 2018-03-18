import './welcomePage';
import sneakInImages from './sneakInImages';
import renderWebcam from './renderWebcam';
import startSpeechDetection from './startSpeechDetection';
import handlePopupClick from './popups/handlePopupClick';
import handleJumbleClick from './jumbler/handleJumbleClick'
import { startGradient, transitionToWebcam, handleKeywordFound } from './gradient/gradientControls';
import { scrollToNextPage } from './helpers';

import '../css/style.css'

const popupTriggers = document.querySelectorAll('.trigger--popup');
const jumbleTriggers = document.querySelectorAll('.trigger--jumble');
const normalTriggers = document.querySelectorAll('.trigger--normal');
const yesBttns = document.querySelectorAll('.bttn--yes');
const webcamCanvas = document.getElementById('webcam-canvas');

function handleNormalClick(e) {
	e.preventDefault();
	const scrollTarget = document.querySelector(e.target.hash);
	scrollToNextPage(scrollTarget);
}

function handleYesBttnClick() {
	renderWebcam(webcamCanvas);
	transitionToWebcam();
}

function handleSpeechDetectionStart(e) {
	e.keyCode === 48 && startSpeechDetection(handleKeywordFound);
}

popupTriggers.forEach(trigger => trigger.addEventListener('click', handlePopupClick));
jumbleTriggers.forEach(trigger => trigger.addEventListener('click', handleJumbleClick))
yesBttns.forEach(bttn => bttn.addEventListener('click', handleYesBttnClick));
normalTriggers.forEach(bttn => bttn.addEventListener('click', handleNormalClick));
window.addEventListener('load', startGradient);
window.addEventListener('load', () => sneakInImages(149));
window.addEventListener('keyup', handleSpeechDetectionStart);

// where to scroll on default
// setTimeout(() => {
// 	document.getElementById('hello-are-you-looking-for-sadness').scrollIntoView();
// }, 300)







