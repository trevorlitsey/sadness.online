import { paintPopups } from './helpers';
import { scrollToNextPage } from '../helpers';
import jumbler from '../jumbler/jumbler';
import getPictureFramePopups from './getPictureFramePopups';
import getFullCoverPopups from './getFullCoverPopups';
import getCircleFramePopups from './getCircleFramePopups';
import getXFramePopups from './getXFramePopups';
import getSquigglePopups from './getSquigglePopups';
import getZigZagPopups from './getZigZagPopups';
import getRandomPopups from './getRandomPopups';

import { turnOffModal } from '../helpers';

let lastPattern;

async function handlePopupClick(e) {
	e.preventDefault();

	// abort if trigger link not clicked
	const { name } = e.target;
	if (name && name === 'cancel') scrollToNextPage(document.querySelector(e.target.hash));
	if (name !== 'trigger') return; // if name does not equal trigger it is not an action we care about

	const container = this;
	const scrollTarget = e.target.hash;
	const modalTarget = container.dataset.modalTarget;
	const pattern = container.dataset.pattern;
	const isFinal = container.dataset.isFinal;

	if (lastPattern === pattern) return;

	let popups;

	switch (pattern) {
		case 'picture-frame':
			popups = getPictureFramePopups();
			break;
		case 'full-cover':
			popups = getFullCoverPopups();
			break;
		case 'circle-frame':
			popups = getCircleFramePopups();
			break;
		case 'x-frame':
			popups = getXFramePopups();
			break;
		case 'squiggle':
			popups = getSquigglePopups();
			break;
		case 'zig-zag':
			popups = getZigZagPopups();
			break
		case 'random':
			popups = getRandomPopups(100);
			break
	}

	lastPattern = pattern;

	await paintPopups(container, popups);

	if (pattern === 'random') return; // yesClick function takes care of transition

	setTimeout(() => {
		if (container.isModal && !isFinal) {
			turnOffModal(container);
		}
		if (scrollTarget) {
			scrollToNextPage(document.querySelector(scrollTarget));
		} else if (modalTarget) {
			const modal = document.getElementById(modalTarget);
			modal.classList.remove('off'); // just to be sure..
			modal.classList.add('on');
		}
	}, 1600)
}

export default handlePopupClick;