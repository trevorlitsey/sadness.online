import './webcam';
import './welcomePage';
import startSpeechDetection from './startSpeechDetection';
import handlePopupClick from './popups/handlePopupClick';
import { go, transitionToWebcam, handleKeywordFound } from './gradientControls';
import { isScrolledIntoView } from './helpers';

import '../css/style.css'

const popupTriggers = document.querySelectorAll('.trigger');
const yesBttns = document.querySelectorAll('.bttn--yes');

startSpeechDetection(handleKeywordFound);

popupTriggers.forEach(trigger => trigger.addEventListener('click', handlePopupClick));
yesBttns.forEach(bttn => bttn.addEventListener('click', transitionToWebcam));
window.addEventListener('load', go);

// where to scroll on default
setTimeout(() => {
	document.getElementById('yes').scrollIntoView();
}, 300)

