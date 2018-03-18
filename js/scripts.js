import './welcomePage';
import sneakInImages from './sneakInImages';
import renderWebcam from './renderWebcam';
import startSpeechDetection from './startSpeechDetection';
import handlePopupClick from './popups/handlePopupClick';
import handleJumbleClick from './jumbler/handleJumbleClick'
import { startGradient, transitionToWebcam, handleKeywordFound } from './gradient/gradientControls';

import '../css/style.css'

const popupTriggers = document.querySelectorAll('.trigger');
const jumbleTriggers = document.querySelectorAll('.trigger--jumble');
const yesBttns = document.querySelectorAll('.bttn--yes');
const webcamCanvas = document.getElementById('webcam-canvas');

function handleYesBttnClick() {
	renderWebcam(webcamCanvas);
	transitionToWebcam();
}

popupTriggers.forEach(trigger => trigger.addEventListener('click', handlePopupClick));
jumbleTriggers.forEach(trigger => trigger.addEventListener('click', handleJumbleClick))
yesBttns.forEach(bttn => bttn.addEventListener('click', handleYesBttnClick));
window.addEventListener('load', startGradient);
window.addEventListener('load', () => sneakInImages(149));
// window.addEventListener('load', () => startSpeechDetection(handleKeywordFound));

// where to scroll on default
// setTimeout(() => {
// 	document.getElementById('hello-are-you-looking-for-sadness').scrollIntoView();
// }, 300)







