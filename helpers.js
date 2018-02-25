function popup() {
	const { height, width, top, left } = newCoords();
	window.open("/img/index.html", "", `height=${height}, width=${width}, top=${top} left=${left}`);
}

function nextPage(url) {
	const [widthRuler, heightRuler] = [611, 196];
	const [height, width, top, left] = [heightRuler, widthRuler, Math.round((Math.random() * window.screen.availHeight) - heightRuler), Math.round((Math.random() * window.screen.availWidth) - widthRuler)];
	window.open(url, "", `height=${height}, width=${width}, top=${top} left=${left}`);
}

function newCoords() {
	const sizes = [300, 400, 500];
	const ruler = sizes[Math.floor(Math.random() * 3)];
	const coords = {
		height: ruler,
		width: ruler,
		top: Math.round(Math.random() * window.screen.availHeight) - ruler,
		left: Math.round(Math.random() * window.screen.availWidth) - ruler
	}
	return coords;
}

function go(finalURL, bool) {
	if (bool) {
		popup();
		let i = 0;
		const interval = setInterval(() => {
			popup();
			i++
			if (i >= 4) {
				clearInterval(interval);
				nextPage(finalURL)
			}
		}, 650)
	} else {
		nextPage(finalURL);
	}
}

function residualPopups() {
	const interval = setInterval(() => {
		popup();
	}, 4000);
}
