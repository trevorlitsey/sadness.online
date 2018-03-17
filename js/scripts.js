import renderWebcam from './renderWebcam';
import './welcomePage';
import startSpeechDetection from './startSpeechDetection';
import handlePopupClick from './popups/handlePopupClick';
import { startGradient, transitionToWebcam, handleKeywordFound } from './gradient/gradientControls';

import '../css/style.css'

const popupTriggers = document.querySelectorAll('.trigger');
const yesBttns = document.querySelectorAll('.bttn--yes');
const webcamCanvas = document.getElementById('webcam-canvas');

popupTriggers.forEach(trigger => trigger.addEventListener('click', handlePopupClick));
yesBttns.forEach(bttn => bttn.addEventListener('click', () => {
	renderWebcam(webcamCanvas);
	transitionToWebcam();
}));
window.addEventListener('load', startGradient);
window.addEventListener('load', () => startSpeechDetection(handleKeywordFound));

// where to scroll on default
// setTimeout(() => {
// 	document.getElementById('yes').scrollIntoView();
// }, 300)






