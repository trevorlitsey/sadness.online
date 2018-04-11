import './welcomePage';
import sneakInImages from './sneakInImages';
import renderWebcam from './renderWebcam';
import handlePopupClick from './popups/handlePopupClick';
import handleJumbleClick from './jumbler/handleJumbleClick'
import {
	scrollToNextPage,
	transitionToWebcam,
	insertQuizImage,
	cycleQuestions,
	boopOrNoBoop,
	deleteAllPages
} from './helpers';

import '../styles/style.scss'

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

function handleNormalClick(e) {
	e.preventDefault();
	const scrollTarget = document.querySelector(e.target.hash);
	if (scrollTarget) {
		scrollToNextPage(scrollTarget);
	}
}

function transitionToFeelingsAreNeverAnAbstraction() {
	setTimeout(() => {
		window.requestAnimationFrame(() => {
			const page = document.getElementById('error-lacking-substance');
			page.classList.add('final-off');
			page.addEventListener('transitionend', () => {
				page.remove();
			})
		});
	}, 2000); // 2s
}

function handleQuestionsClick() {
	const h1Node = document.getElementById('questions').querySelector('h1');
	const questions = [
		'Noise becomes signal.',
		'Signal becomes story.',
		'Stories become decisions.',
	]
	cycleQuestions(h1Node, questions, true);
}

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