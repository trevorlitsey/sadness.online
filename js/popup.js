const randomTriggers = document.querySelectorAll('.trigger--random');
const squareTriggers = document.querySelectorAll('.trigger--square');

function scrollToNextPage(hash) {
	return document.querySelector(hash).scrollIntoView();
}

function getContainerWidthAndHeight(container) {
	const containerWidth = container.getBoundingClientRect().width;
	const containerHeight = container.getBoundingClientRect().height;
	return { containerWidth, containerHeight };
}

function getImgSrc() {
	const num = Math.round(Math.random() * 149);
	if (num >= 99 && num <= 145) {
		return `images/${num}.gif`;
	} else {
		return `images/${num}.jpg`;
	}
}

function insertRandomPopup(node) {
	const width = Math.round(Math.random() * 300 + 100);
	const top = (node.getBoundingClientRect().height - width) * Math.random();
	const left = (node.getBoundingClientRect().width - width) * Math.random();
	const img = `<img src="${getImgSrc()}" style="position: absolute; left: ${left}px; top: ${top}px; width: ${width}px;"></img>`;
	node.innerHTML += img
}

function insertPlacedPopup(node, popOptions) {
	const { width, top, left } = popOptions;
	console.log({ width, top, left });

	const img = `<img src="${getImgSrc()}" style="position: absolute; left: ${left}px; top: ${top}px; width: ${width}px;"></img>`;
	node.innerHTML += img
}

function fullPagePop(node) {
	const width = node.getBoundingClientRect().width - 20;
	const height = node.getBoundingClientRect().height - 20;
	const top = 10;
	const left = 10;
	const img = `<img src="${getImgSrc()}" style="position: absolute; left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px"></img>`;
	node.innerHTML += img
}

function generateRandomPopups(e) {
	e.preventDefault();

	const container = this;
	const popNum = Number(container.dataset.pop);

	let i = 0;
	const interval = setInterval(() => {
		insertRandomPopup(container);
		i++;
		if (i === popNum) {
			clearInterval(interval);
			fullPagePop(container);
			setTimeout(() => {
				scrollToNextPage(e.target.hash);
			}, 2000)
		}
	}, 100)
}

function fullCoverPopups(e) {
	e.preventDefault();

	const container = this;
	const scrollTarget = e.target.hash;

	const { containerWidth, containerHeight } = getContainerWidthAndHeight(container);

	const popups = [];
	for (let i = 10; i < containerWidth; i += 100) {
		for (let j = 10; j < containerHeight; j += 100) {
			popOptions = {
				width: 150,
				top: i,
				left: j,
			}
			popups.push(popOptions);
		}
	}

	let index = 0;
	const interval = setInterval(() => {
		if (index == popups.length - 1) {
			clearInterval(interval);
			setTimeout(() => {
				scrollToNextPage(e.target.hash);
			}, 2000)
		}
		insertPlacedPopup(container, popups[index]);
		index++;
	}, 50)
}

function pictureFramePopups() {
	e.preventDefault();

	const container = this;
	const scrollTarget = e.target.hash;

	const { containerWidth, containerHeight } = getContainerWidthAndHeight(container);

	for (let i = 10; i < containerWidth; i += 100) {
		for (let j = 10; j < containerHeight; j += 100) {
			popOptions = {
				width: 150,
				top: i,
				left: j,
			}
			popups.push(popOptions);
		}
	}


}

randomTriggers.forEach(trigger => trigger.addEventListener('click', generateRandomPopups));
squareTriggers.forEach(trigger => trigger.addEventListener('click', fullCoverPopups));

// where to scroll on default
setTimeout(() => {
	document.getElementById('sorry-that-happiness-was-unavailable').scrollIntoView();
}, 300)
