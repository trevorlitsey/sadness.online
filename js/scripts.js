import './welcomePage';
import sneakInImages from './sneakInImages';
import renderWebcam from './renderWebcam';
import handlePopupClick from './popups/handlePopupClick';
import handleJumbleClick from './jumbler/handleJumbleClick'
import { scrollToNextPage, transitionToWebcam, insertQuizImage, cycleQuestions } from './helpers';

import '../css/style.css'

const boop = document.getElementById('boop');
const popupTriggers = document.querySelectorAll('.trigger--popup');
const jumbleTriggers = document.querySelectorAll('.trigger--jumble');
const normalTriggers = document.querySelectorAll('.trigger--normal');
const quizLinks = document.querySelectorAll('.quiz-link');
const firstQuestionsTriggers = document.querySelector('#smilies').querySelectorAll('a');
const secondQuestionsTriggers = document.querySelector('#questions-one').querySelectorAll('a');
const yesBttns = document.querySelectorAll('.bttn--yes');
const webcamCanvasOne = document.querySelector('.webcam-canvas--one');
const webcamCanvasTwo = document.querySelector('.webcam-canvas--two');

console.log(boop);


function handleNormalClick(e) {
	e.preventDefault();
	const scrollTarget = document.querySelector(e.target.hash);
	if (scrollTarget) {
		scrollToNextPage(scrollTarget);
	}
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

function boopOrNoBoop(e) {
	if (e.target.dataset.boop === 'true') {
		boop.currentTime = 0;
		boop.play();
	}
}

popupTriggers.forEach(trigger => trigger.addEventListener('click', handlePopupClick));
jumbleTriggers.forEach(trigger => trigger.addEventListener('click', handleJumbleClick));
document.addEventListener('click', boopOrNoBoop);
quizLinks.forEach(linkNode => insertQuizImage(linkNode));
firstQuestionsTriggers.forEach(trigger => trigger.addEventListener('click', handleFirstQuestionsClick))
secondQuestionsTriggers.forEach(trigger => trigger.addEventListener('click', handleSecondQuestionsClick))
yesBttns.forEach(bttn => bttn.addEventListener('click', handleYesBttnClick));
normalTriggers.forEach(bttn => bttn.addEventListener('click', handleNormalClick));
setTimeout(() => sneakInImages(149), 4000);

// where to scroll on default
setTimeout(() => {
	// scrollToNextPage(document.getElementById('yes'))
}, 300)





