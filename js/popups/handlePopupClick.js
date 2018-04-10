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

let lastPattern;

async function handlePopupClick(e) {
	e.preventDefault();

	// abort if trigger link not clicked
	const { name } = e.target;
	if (name && name === 'cancel') scrollToNextPage(document.querySelector(e.target.hash));
	if (name !== 'trigger') return; // if name does not equal trigger it is not an action we care about

	const container = this;
	const scrollTarget = e.target.hash;
	const modalId = container.dataset.modal;
	const pattern = container.dataset.pattern;

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

	// what's the container when it's a modal??
	await paintPopups(container, popups);

	if (pattern === 'random') return; // yesClick function takes care of transition

	setTimeout(() => {
		if (scrollTarget) {
			scrollToNextPage(document.querySelector(scrollTarget));
		} else if (modalId) {
			const modal = document.getElementById(modalId);
			console.log(modal);

			modal.classList.remove('off');
			modal.classList.add('on');
		}
	}, 1600)
}

export default handlePopupClick;