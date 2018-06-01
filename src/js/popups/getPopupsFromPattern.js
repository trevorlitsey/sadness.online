import {
	pictureFrame,
	fullCover,
	circleFrame,
	xFrame,
	squiggle,
	zigZag,
	random,
} from './patterns';

function getPopupsFromPattern(pattern) {
	switch (pattern) {
		case 'picture-frame':
			return pictureFrame();
		case 'full-cover':
			return fullCover();
		case 'circle-frame':
			return circleFrame();
		case 'x-frame':
			return xFrame();
		case 'squiggle':
			return squiggle();
		case 'zig-zag':
			return zigZag();
		case 'random':
			return random(100);
	}
}

export default getPopupsFromPattern;
