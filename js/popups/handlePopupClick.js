import { paintPopups, scrollToNextPage } from './helpers';
import jumbler from '../jumbler/jumbler';
import getPictureFramePopups from './getPictureFramePopups';
import getFullCoverPopups from './getFullCoverPopups';
import getCircleFramePopups from './getCircleFramePopups';
import getXFramePopups from './getXFramePopups';
import getSquigglePopups from './getSquigglePopups';

let lastPattern;

async function handlePopupClick(e) {

	console.log('handling popup click');


	// abort if trigger link not clicked
	if (e.target.name !== 'trigger') return;
	e.preventDefault();

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
	}

	lastPattern = pattern;

	await paintPopups(container, popups);

	setTimeout(() => {
		scrollToNextPage(scrollTarget);
		jumbleTarget && jumbler(document.getElementById(jumbleTarget).querySelector('h1'));
	}, 1600)
}

export default handlePopupClick;