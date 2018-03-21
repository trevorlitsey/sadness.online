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
	if (name !== 'trigger') return;

	const container = this;
	const scrollTarget = e.target.hash;
	const pattern = container.dataset.pattern;
	const jumbleTarget = container.dataset.jumble;

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
			popups = getRandomPopups(75);
			break
	}

	lastPattern = pattern;

	await paintPopups(container, popups);

	setTimeout(() => {
		scrollToNextPage(document.querySelector(scrollTarget));
		// jumbleTarget && jumbler(document.getElementById(jumbleTarget).querySelector('h1'));
	}, 1600)
}

export default handlePopupClick;