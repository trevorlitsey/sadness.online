import './welcomePage';
import sneakInImages from './sneakInImages';
import renderWebcam from './renderWebcam';
import handlePopupClick from './popups/handlePopupClick';
import handleJumbleClick from './jumbler/handleJumbleClick'
import { handleNormalClick, handleQuestionsClick } from './clickHandlers';
import {
	scrollToNextPage,
	transitionToWebcam,
	insertQuizImage,
	cycleQuestions,
	boopOrNoBoop,
	deleteAllPages,
	transitionToFeelingsAreNeverAnAbstraction
} from './helpers';

import '../styles/style.scss'

// dom nodes
const boop = document.getElementById('boop');
const popupTriggers = document.querySelectorAll('.trigger--popup');
const jumbleTriggers = document.querySelectorAll('.trigger--jumble');
const normalTriggers = document.querySelectorAll('.trigger--normal');
const quizLinks = document.querySelectorAll('.quiz-link');
const QuestionsTriggers = document.querySelector('#this-seems-impracticle').querySelectorAll('a');
const yesBttns = document.querySelectorAll('.bttn--yes');
const deletePagesTrigger = document.querySelector('[data-delete-all-pages="true"]')
const webcamCanvasOne = document.querySelector('.webcam-canvas--one');
const webcamCanvasTwo = document.querySelector('.webcam-canvas--two');


document.querySelectorAll('.modal').forEach(modal => modal.isModal = true);

popupTriggers.forEach(trigger => trigger.addEventListener('click', handlePopupClick));
jumbleTriggers.forEach(trigger => trigger.addEventListener('click', handleJumbleClick));
document.addEventListener('click', boopOrNoBoop);
quizLinks.forEach(linkNode => insertQuizImage(linkNode));
QuestionsTriggers.forEach(trigger => trigger.addEventListener('click', handleQuestionsClick))
normalTriggers.forEach(bttn => bttn.addEventListener('click', handleNormalClick));
yesBttns.forEach(bttn => bttn.addEventListener('click', transitionToFeelingsAreNeverAnAbstraction));
deletePagesTrigger.addEventListener('click', deleteAllPages);
setTimeout(() => sneakInImages(149), 4000);

// where to scroll on default
setTimeout(() => {
	// scrollToNextPage(document.getElementById('questions'))
}, 300)