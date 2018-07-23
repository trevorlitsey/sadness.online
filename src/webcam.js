import renderWebcam from './js/renderWebcam';
import { handleKeyUp } from './js/clickHandlers';

import './styles/style.scss';

const canvasOne = document.querySelector('.webcam-canvas--one');
const canvasTwo = document.querySelector('.webcam-canvas--two');

renderWebcam(canvasOne, canvasTwo);

window.addEventListener('keyup', handleKeyUp);
