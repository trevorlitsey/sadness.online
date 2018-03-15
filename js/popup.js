const randomTriggers = document.querySelectorAll('.trigger--random');
const fullCoverTriggers = document.querySelectorAll('.trigger--full-cover');
const pictureFrameTriggers = document.querySelectorAll('.trigger--picture-frame');

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
	const { width, height, top, left, right } = popOptions;
	const img = `<img src="${getImgSrc()}" style="position: absolute; left: ${left}; right: ${right}; top: ${top}; width: ${width}; height: ${height}"></img>`;
	node.innerHTML += img
}

function paintPopups(container, popups, scrollTarget) {
	let index = 0;
	const interval = setInterval(() => {
		if (index == popups.length - 1) {
			clearInterval(interval);
			setTimeout(() => {
				scrollToNextPage(scrollTarget);
			}, 2000)
		}
		insertPlacedPopup(container, popups[index]);
		index++;
	}, 50)
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

	const popups = [];
	let direction = true;
	let j;
	for (let i = -5; i < 100; i += 15) {
		direction ? j = -5 : j = 95;
		while (j > -10 && j < 100) {
			popOptions = {
				width: `${20}%`,
				height: 'auto',
				top: `${i}%`,
				left: `${j}%`,
				right: 'auto'
			}
			popups.push(popOptions);
			direction ? j += 12 : j -= 12;
		}
		direction = !direction;
	}

	// do work
	paintPopups(container, popups, scrollTarget);
}

function pictureFramePopups(e) {
	e.preventDefault();

	const container = this;
	const scrollTarget = e.target.hash;

	const popups = [];

	// top
	for (i = -5; i < 100; i += 15) {
		popOptions = {
			width: '20%',
			height: 'auto',
			top: '-5%',
			left: `${i}%`,
			right: 'auto',
		}
		popups.push(popOptions);
	}

	// right
	for (i = 10; i < 100; i += 15) {
		popOptions = {
			width: 'auto',
			height: '20%',
			top: `${i}%`,
			left: '85%',
			right: 'auto',
		}
		popups.push(popOptions);
	}

	// bottom
	for (i = 85; i > 0; i -= 15) {
		popOptions = {
			width: '20%',
			height: 'auto',
			top: '85%',
			left: `${i}%`,
			right: 'auto',
		}
		popups.push(popOptions);
	}

	// left
	for (i = 85; i > 0; i -= 15) {
		popOptions = {
			width: 'auto',
			height: '20%',
			top: `${i}%`,
			left: 'auto',
			right: '85%',
		}
		popups.push(popOptions);
	}

	paintPopups(container, popups, scrollTarget);
}

randomTriggers.forEach(trigger => trigger.addEventListener('click', generateRandomPopups));
fullCoverTriggers.forEach(trigger => trigger.addEventListener('click', fullCoverPopups));
pictureFrameTriggers.forEach(trigger => trigger.addEventListener('click', pictureFramePopups));

// where to scroll on default
// setTimeout(() => {
// 	document.getElementById('continue').scrollIntoView();
// }, 300)
