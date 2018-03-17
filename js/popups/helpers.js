export function scrollToNextPage(hash) {
	return document.querySelector(hash).scrollIntoView();
}

export function getContainerWidthAndHeight(container) {
	const containerWidth = container.getBoundingClientRect().width;
	const containerHeight = container.getBoundingClientRect().height;
	return { containerWidth, containerHeight };
}

export function getImgSrc() {
	const num = Math.round(Math.random() * 149);
	if (num >= 99 && num <= 145) {
		return `images/${num}.gif`;
	} else {
		return `images/${num}.jpg`;
	}
}

export function insertRandomPopup(node) {
	const width = Math.round(Math.random() * 300 + 100);
	const top = (node.getBoundingClientRect().height - width) * Math.random();
	const left = (node.getBoundingClientRect().width - width) * Math.random();
	const img = `<img src="${getImgSrc()}" style="position: absolute; left: ${left}px; top: ${top}px; width: ${width}px;"></img>`;
	window.requestAnimationFrame(() => {
		node.innerHTML += img;
	})
}

export function insertPlacedPopup(node, popOptions) {
	let { width, height, top, bottom, left, right } = popOptions;
	if (!width) width = 'auto';
	if (!height) height = 'auto';
	if (!top) top = 'auto';
	if (!bottom) bottom = 'auto';
	if (!left) left = 'auto';
	if (!right) right = 'auto';
	const img = `<img src="${getImgSrc()}" style="position: absolute; left: ${left}; right: ${right}; top: ${top}; bottom: ${bottom}; width: ${width}; height: ${height}"></img>`;
	window.requestAnimationFrame(() => {
		node.innerHTML += img;
	})
}

export function getFullPagePop() {
	return {
		width: '100%',
		height: '100%',
		top: '0',
		left: '0',
		right: 'auto',
	}
}

export function paintPopups(container, popups, scrollTarget) {
	let index = 0;
	const interval = setInterval(() => {
		if (index == popups.length - 1) {
			clearInterval(interval);
			setTimeout(() => {
				scrollToNextPage(scrollTarget);
			}, 1600)
		}
		insertPlacedPopup(container, popups[index]);
		index++;
	}, 50)
}