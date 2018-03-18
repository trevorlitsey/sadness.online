const imageContainer = document.querySelector('.images--preload');

function getImgSrc(num) {
	if (num >= 99 && num <= 145) {
		return `dist/images/${num}.gif`;
	} else {
		return `dist/images/${num}.jpg`;
	}
}

function makeImageTag(num) {
	return `<img src="${getImgSrc(num)}" width="1" height="1">`
}

function sneakInImages(howManyImages) {
	let i = 0;
	const interval = setInterval(() => {
		window.requestAnimationFrame(() => {
			imageContainer.innerHTML += makeImageTag(i);
			if (i === howManyImages) {
				clearInterval(interval);
				console.log('images loaded');
			} else {
				i++;
			}
		})
	}, 10)
}

export default sneakInImages;