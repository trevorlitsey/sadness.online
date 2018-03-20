// https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
export function isScrolledIntoView(el) {
	var rect = el.getBoundingClientRect();
	var elemTop = rect.top;
	var elemBottom = rect.bottom;

	// Only completely visible elements return true:
	var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	// Partially visible elements return true:
	//isVisible = elemTop < window.innerHeight && elemBottom >= 0;
	return isVisible;
}

export function scrollToNextPage(node) {
	return node.scrollIntoView({ behavior: 'smooth' });
}

export function transitionToWebcam() {
	const yesPage = document.getElementById('yes');
	const webcamPage = document.getElementById('webcam-page');
	window.requestAnimationFrame(() => yesPage.classList.add('off'));
	setTimeout(() => {
		scrollToNextPage(webcamPage);
		setTimeout(() => {
			window.requestAnimationFrame(() => {
				webcamPage.classList.remove('off');
			});
		}, 400)
	}, 10000)
}