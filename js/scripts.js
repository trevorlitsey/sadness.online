import './welcomePage';
import sneakInImages from './sneakInImages';
import renderWebcam from './renderWebcam';
import printPopups from './popups/printPopups';
import handleJumble from './jumbler/handleJumble'
import { handleNormalClick, handleQuestionsClick } from './clickHandlers';
import {
	scrollToNextPage,
	transitionToWebcam,
	insertQuizImage,
	cycleQuestions,
	play,
	turnOnModal,
	turnOffModal,
	deleteAllPages,
	handleFinalPageClick
} from './helpers';

import '../styles/style.scss'

const boopSound = document.getElementById('boop');
const quizLinks = document.querySelectorAll('.quiz-link');
const deletePagesTrigger = document.querySelector('[data-delete-all-pages="true"]')
const lastPageTrigger = document.querySelector('[data-last-modal="true"]')
const webcamPage = document.querySelector('.page--webcam');
const webcamCanvasOne = document.querySelector('.webcam-canvas--one');
const webcamCanvasTwo = document.querySelector('.webcam-canvas--two');

const pages = document.querySelectorAll('.page');
const modals = document.querySelectorAll('.modal')

async function filterClick(e) {
	e.preventDefault();

	const { popupPattern, jumbleTarget, questionsTrigger, modalTarget, normalTarget, isModal, lastModal } = this.dataset;
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
	// questions click (cycler)
	if (questionsTrigger) {
		handleQuestionsClick();
	}
	if (isModal) {
		turnOffModal(this);
	}
	// modal click
	if (modalTarget) {
		// TODO
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
deletePagesTrigger.addEventListener('click', deleteAllPages);

document.querySelectorAll('.modal').forEach(modal => modal.isModal = true);
setTimeout(() => sneakInImages(149), 4000);
quizLinks.forEach(linkNode => insertQuizImage(linkNode));

// where to scroll on default
setTimeout(() => {
	// scrollToNextPage('#questions')
}, 300)