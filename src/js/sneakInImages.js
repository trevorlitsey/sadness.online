import { getImgSrc } from './helpers';

const imageContainer = document.querySelector('.images--preload');

function makeImageTag(num) {
	return `<img src="${getImgSrc(num)}" width="1" height="1">`;
}

function sneakInImages(howManyImages) {
	let i = 0;
	const interval = setInterval(() => {
		if (i >= howManyImages) {
			clearInterval(interval);
			console.log('images loaded');
		} else {
			// load in images one by one
			window.requestAnimationFrame(() => {
				imageContainer.innerHTML += makeImageTag(i);
				i++;
			});
		}
	}, 20);
}

export default sneakInImages;
