import './libraries/clamp';

import './welcomePage';
import sneakInImages from './sneakInImages';
import renderWebcam from './renderWebcam';
import printPopups from './popups/printPopups';
import handleJumble from './jumbler/handleJumble'
import {
	handleNormalClick,
	handleQuestionsClick,
	turnOnModal,
	turnOffModal,
	handleTransitionToFeelings,
} from './clickHandlers';
import {
	scrollToNextPage,
	insertQuizImage,
	cycleQuestions,
	play,
	deleteAllPages,
	transitionToWebcam as handleTransitionToWebcam,
	applyBackgroundMotion,
	displayQuizPage,
	startOver,
} from './helpers';

import '../styles/style.scss'

const boopSound = document.getElementById('boop');
const quizLinks = document.querySelectorAll('.quiz-link');
const deletePagesTrigger = document.querySelector('[data-delete-all-pages="true"]')
const lastPageTrigger = document.querySelector('[data-last-modal="true"]')
const webcamPage = document.querySelector('.page--webcam');
const webcamCanvasOne = document.querySelector('.webcam-canvas--one');
const webcamCanvasTwo = document.querySelector('.webcam-canvas--two');
const backgroundImageOne = document.querySelector('.shape-1')
const backgroundImageTwo = document.querySelector('.shape-2')
const clampedText = document.querySelector('.clamp')

const pages = document.querySelectorAll('.page');
const modals = document.querySelectorAll('.modal')

async function filterClick(e) {
	e.preventDefault();

	const { popupPattern, jumbleTarget, questionsTrigger, modalTarget, quizTarget, normalTarget, isModal, transitionToFeelings, transitionToWebcam } = this.dataset;
	const { boop } = e.target.dataset;
	const { nodeName } = e.target;

	const clickTargetHash = e.target.hash || normalTarget;

	if (!['A', 'SPAN', 'BUTTON'].includes(nodeName)) return; // no go if not a link (span is for welcome page)

	// boop it
	if (boop) {
		play(boopSound);
	}
	// popup click
	if (popupPattern) {
		await printPopups(this, popupPattern);
	}
	// jumble click
	if (jumbleTarget) {
		handleJumble(jumbleTarget);
	}
	// quiz click (fade in next page)
	if (quizTarget) {
		const page = document.querySelector(clickTargetHash);
		displayQuizPage(page, 250);
	}
	// questions click (cycler)
	if (questionsTrigger) {
		handleQuestionsClick();
	}
	if (isModal) {
		turnOffModal(this);
	}
	// modal click
	if (modalTarget) {
		turnOnModal(modalTarget);
	}
	// transition to webcam
	if (transitionToWebcam) {
		renderWebcam(webcamCanvasOne, webcamCanvasTwo);
		return handleTransitionToWebcam()
	}

	// transition to feelings
	if (transitionToFeelings) {
		await handleTransitionToFeelings(this);
	}

	// just a normal click
	if (clickTargetHash) {
		scrollToNextPage(clickTargetHash);
	}

}

pages.forEach(page => page.addEventListener('click', filterClick))
modals.forEach(modal => modal.addEventListener('click', filterClick))
// deletePagesTrigger.addEventListener('click', deleteAllPages);

window.addEventListener('load', () => applyBackgroundMotion(backgroundImageOne, backgroundImageTwo))
document.querySelectorAll('.modal').forEach(modal => modal.isModal = true);
setTimeout(() => sneakInImages(149), 4000);
quizLinks.forEach(linkNode => insertQuizImage(linkNode));
document.addEventListener('keyup', startOver)

// where to scroll on default
setTimeout(() => {
	// scrollToNextPage('#this-seems-impractical');
}, 300)