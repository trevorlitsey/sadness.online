const pages = document.querySelectorAll('.trigger');

function getImgSrc() {
	const num = Math.round(Math.random() * 149);
	if (num >= 99 && num <= 145) {
		return `images/${num}.gif`;
	} else {
		return `images/${num}.jpg`;
	}
}

function insertPopup(node) {
	console.log('pop');

	const width = Math.round(Math.random() * 300 + 100);
	const top = (node.getBoundingClientRect().height - width) * Math.random();
	const left = (node.getBoundingClientRect().width - width) * Math.random();
	const img = `<img src="${getImgSrc()}" style="position: absolute; left: ${left}px; top: ${top}px; width: ${width}px;"></img>`;
	node.innerHTML += img
}

function lastPop(node) {
	const width = node.getBoundingClientRect().width - 20;
	const height = node.getBoundingClientRect().height - 20;
	const top = 10;
	const left = 10;
	const img = `<img src="${getImgSrc()}" style="position: absolute; left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px"></img>`;
	node.innerHTML += img
}

function handleClickRandom(e) {
	e.preventDefault();

	const container = this;
	const popNum = Number(container.dataset.pop);
	const scrollTarget = e.target.hash;

	let i = 0;
	const interval = setInterval(() => {
		insertPopup(container);
		i++;
		if (i === popNum) {
			clearInterval(interval);
			lastPop(container);
			setTimeout(() => {
				document.querySelector(scrollTarget).scrollIntoView();
			}, 2000)
		}
	}, 100)
}

pages.forEach(page => page.addEventListener('click', handleClickRandom));
