import { applyBackgroundMotion } from './helpers';

import './welcomePage';

import '../styles/style.scss';

const backgroundImageOne = document.querySelector('.shape-1');
const backgroundImageTwo = document.querySelector('.shape-2');

window.addEventListener('load', () =>
	applyBackgroundMotion(backgroundImageOne, backgroundImageTwo)
);
