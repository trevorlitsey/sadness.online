import { paintPopups } from './helpers';
import getPictureFramePopups from './getPictureFramePopups';
import getFullCoverPopups from './getFullCoverPopups';
import getCircleFramePopups from './getCircleFramePopups';
import getXFramePopups from './getXFramePopups';
import getSquigglePopups from './getSquigglePopups';

let lastPattern;

function handlePopupClick(e) {

	// abort if link not clicked
	if (e.target.name !== 'trigger') return;
	this.setAttribute('disabled', 'disabled');
	e.preventDefault();

	const container = this;
	const scrollTarget = e.target.hash;
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
	}

	lastPattern = pattern;

	paintPopups(container, popups, scrollTarget);

}

export default handlePopupClick;