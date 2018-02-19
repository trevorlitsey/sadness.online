function popup() {
	const { height, width, top, left } = newCoords();
	window.open("/img", "", `height=${height}, width=${width}, top=${top} left=${left}`);
}

function nextPage(url) {
	const ruler = 600;
	const [height, width, top, left] = [ruler, ruler, Math.round((Math.random() * window.screen.availHeight) - ruler), Math.round((Math.random() * window.screen.availWidth) - ruler)];
	window.open(url, "", `height=${height}, width=${width}, top=${top} left=${left}`);
}

function newCoords() {
	const ruler = 300;
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
