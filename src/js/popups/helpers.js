import { getImgSrc } from '../helpers';

export function getContainerWidthAndHeight(container) {
	const containerWidth = container.getBoundingClientRect().width;
	const containerHeight = container.getBoundingClientRect().height;
	return { containerWidth, containerHeight };
}

export function insertRandomPopup(node) {
	const width = Math.round(Math.random() * 300 + 100);
	const top = (node.getBoundingClientRect().height - width) * Math.random();
	const left = (node.getBoundingClientRect().width - width) * Math.random();
	const img = `<img src="${getImgSrc()}" style="position: absolute; left: ${left}px; top: ${top}px; width: ${width}px;"></img>`;
	window.requestAnimationFrame(() => {
		node.innerHTML += img;
	});
}

export function insertPlacedPopup(node, popOptions) {
	const options = {
		width: 'auto',
		height: 'auto',
		top: 'auto',
		bottom: 'auto',
		left: 'auto',
		right: 'auto',
		src: getImgSrc(),
		...popOptions,
	};

	const { width, height, top, bottom, left, right, src } = options;

	const img = `<img src="${src}" style="position: absolute; left: ${left}; right: ${right}; top: ${top}; bottom: ${bottom}; width: ${width}; height: ${height}"></img>`;

	window.requestAnimationFrame(() => {
		node.innerHTML += img;
	});
}

export function paintPopups(container, popups, delayInterval = 50) {
	return new Promise((resolve, reject) => {
		let index = 0;
		const interval = setInterval(() => {
			insertPlacedPopup(container, popups[index]);
			if (index == popups.length - 1) {
				clearInterval(interval);
				resolve(true);
			}
			index++;
		}, delayInterval);
	});
}
