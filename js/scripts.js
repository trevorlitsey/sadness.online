import './welcomePage';
import sneakInImages from './sneakInImages';
import renderWebcam from './renderWebcam';
import handlePopupClick from './popups/handlePopupClick';
import handleJumbleClick from './jumbler/handleJumbleClick'
import { scrollToNextPage, transitionToWebcam, insertQuizImage, cycleQuestions } from './helpers';

import '../css/style.css'

const popupTriggers = document.querySelectorAll('.trigger--popup');
const jumbleTriggers = document.querySelectorAll('.trigger--jumble');
const normalTriggers = document.querySelectorAll('.trigger--normal');
const quizLinks = document.querySelectorAll('.quiz-link');
const firstQuestionsTriggers = document.querySelector('#smilies').querySelectorAll('a');
const secondQuestionsTriggers = document.querySelector('#questions-one').querySelectorAll('a');
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

function handleFirstQuestionsClick() {
	const h1Node = document.getElementById('questions-one').querySelector('h1');
	const questions = [
		'Do you panic easily?',
		'Do you often feel blue?',
		'Do you have a sharp tongue?',
		'Do you get chores done right away?',
		'Do you believe in the importance of art?',
	]
	cycleQuestions(h1Node, questions);
}

function handleSecondQuestionsClick() {
	const h1Node = document.getElementById('questions-two').querySelector('h1');
	const questions = [
		'Noise becomes signal.',
		'Signal becomes story.',
		'Stories become decisions.',
	]
	cycleQuestions(h1Node, questions, true);
}

popupTriggers.forEach(trigger => trigger.addEventListener('click', handlePopupClick));
jumbleTriggers.forEach(trigger => trigger.addEventListener('click', handleJumbleClick));
quizLinks.forEach(linkNode => insertQuizImage(linkNode));
firstQuestionsTriggers.forEach(trigger => trigger.addEventListener('click', handleFirstQuestionsClick))
secondQuestionsTriggers.forEach(trigger => trigger.addEventListener('click', handleSecondQuestionsClick))
yesBttns.forEach(bttn => bttn.addEventListener('click', handleYesBttnClick));
normalTriggers.forEach(bttn => bttn.addEventListener('click', handleNormalClick));
setTimeout(() => sneakInImages(149), 4000);

// where to scroll on default
setTimeout(() => {
	// scrollToNextPage(document.getElementById('questions-two'))
}, 300)





