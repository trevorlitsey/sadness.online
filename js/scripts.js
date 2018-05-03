import './libraries/clamp';

import './welcomePage';
import sneakInImages from './sneakInImages';
import renderWebcam from './renderWebcam';
import printPopups from './popups/printPopups';
import handleJumble from './jumbler/handleJumble'
import { handleNormalClick, handleQuestionsClick } from './clickHandlers';
import {
	scrollToNextPage,
	insertQuizImage,
	cycleQuestions,
	play,
	turnOnModal,
	turnOffModal,
	deleteAllPages,
	handleFinalPageClick,
	applyBackgroundMotion,
	displayQuizPage
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

	const { popupPattern, jumbleTarget, questionsTrigger, modalTarget, quizTarget, normalTarget, isModal, lastModal } = this.dataset;
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
	// just a normal click
	if (clickTargetHash) {
		scrollToNextPage(clickTargetHash);
	}

	// last page :(
	if (lastModal) {
		renderWebcam(webcamCanvasOne, webcamCanvasTwo);
		await handleFinalPageClick(this);
		webcamPage.classList.add('on');
	}

}

pages.forEach(page => page.addEventListener('click', filterClick))
modals.forEach(modal => modal.addEventListener('click', filterClick))
// $clamp(clampedText, { clamp: 2 });
// deletePagesTrigger.addEventListener('click', deleteAllPages);

window.addEventListener('load', () => applyBackgroundMotion(backgroundImageOne, backgroundImageTwo))
document.querySelectorAll('.modal').forEach(modal => modal.isModal = true);
setTimeout(() => sneakInImages(149), 4000);
quizLinks.forEach(linkNode => insertQuizImage(linkNode));

// where to scroll on default
setTimeout(() => {
	// scrollToNextPage('#questions')
}, 300)