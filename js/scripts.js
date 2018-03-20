import './welcomePage';
import sneakInImages from './sneakInImages';
import renderWebcam from './renderWebcam';
import handlePopupClick from './popups/handlePopupClick';
import handleJumbleClick from './jumbler/handleJumbleClick'
import { scrollToNextPage, transitionToWebcam } from './helpers';

import '../css/style.css'

const popupTriggers = document.querySelectorAll('.trigger--popup');
const jumbleTriggers = document.querySelectorAll('.trigger--jumble');
const normalTriggers = document.querySelectorAll('.trigger--normal');
const yesBttns = document.querySelectorAll('.bttn--yes');
const webcamCanvasOne = document.querySelector('.webcam-canvas--one');
const webcamCanvasTwo = document.querySelector('.webcam-canvas--two');

function handleNormalClick(e) {
	e.preventDefault();
	const scrollTarget = document.querySelector(e.target.hash);
	scrollToNextPage(scrollTarget);
}

function handleYesBttnClick() {
	renderWebcam(webcamCanvasOne, webcamCanvasTwo, 3000);
	transitionToWebcam();
}

function handleSpeechDetectionStart(e) {
	e.keyCode === 48 && startSpeechDetection(handleKeywordFound);
}

popupTriggers.forEach(trigger => trigger.addEventListener('click', handlePopupClick));
jumbleTriggers.forEach(trigger => trigger.addEventListener('click', handleJumbleClick))
yesBttns.forEach(bttn => bttn.addEventListener('click', handleYesBttnClick));
normalTriggers.forEach(bttn => bttn.addEventListener('click', handleNormalClick));
window.addEventListener('load', () => sneakInImages(149));

// where to scroll on default
// setTimeout(() => {
// 	document.getElementById('webcam-page').scrollIntoView();
// }, 300)





