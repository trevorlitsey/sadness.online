import imgUrl from '../assets/fractal/fractal.gif';
import { handleTransitionToWebcam } from './clickHandlers';
import renderWebcam from './renderWebcam';

const bassoSound = document.getElementById('basso');
const webcamCanvasOne = document.querySelector('.webcam-canvas--one');
const webcamCanvasTwo = document.querySelector('.webcam-canvas--two');

initFractals(imgUrl);

// ------------------
function initFractals(imgUrl) {
	window.addEventListener('keyup', e => {
		if (e.keyCode === 66) {
			renderWebcam(webcamCanvasOne, webcamCanvasTwo);
			handleTransitionToWebcam();
		}
	});
	const images = document.querySelectorAll('img.fractal').forEach(img => {
		if (!img.src) {
			img.src = imgUrl + '?id=' + Math.floor(Math.random() * 100);
		}
	});
	document.querySelectorAll('.wrapper--fractal-image').forEach(wrapper => {
		wrapper.addEventListener('click', function(e) {
			e.stopPropagation();
			playSound(bassoSound);
			this.classList.add('break');
			this.innerHTML = `
			<div class="wrapper--fractal-image">
				<img class="fractal">
			</div>
			<div class="wrapper--fractal-image">
				<img class="fractal">
			</div>
			<div class="wrapper--fractal-image">
				<img class="fractal">
			</div>
			<div class="wrapper--fractal-image">
				<img class="fractal">
			</div>
		`;
			initFractals(imgUrl);
		});
	});
}

function playSound(node) {
	node.currentTime = 0;
	const rate = (Math.random() * 2 + 7) / 10;
	node.playbackRate = rate;
	node.play();
}
