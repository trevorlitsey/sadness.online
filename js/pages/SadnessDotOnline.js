import { debounce } from '../helpers';

const page = document.getElementById('sadnessDotOnline');
const background = page.querySelector('.background');

function disappear(tick) {

	tick.classList.add('make-transparent')
	tick.classList.add('spin');

	setTimeout(() => {
		tick.remove();
	}, 5000);
}

function handleBackgroundChange(e) {

	const { clientX, clientY } = e;

	const tick = document.createElement('div');
	tick.classList.add('tick');
	tick.style.position = 'absolute';
	tick.style.left = `${clientX}px`;
	tick.style.top = `${clientY}px`;

	window.requestAnimationFrame(() => {
		background.appendChild(tick);
		tick.classList.add('spin');
		setTimeout(() => {
			disappear(tick)
		}, 600);
	})
}

const debouncedFunc = (e) => debounce(handleBackgroundChange(e), 100);

background.addEventListener('mousemove', debouncedFunc);

