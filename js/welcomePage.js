const sadnessDotOnline = document.querySelector('.welcome--sadnessDotOnline');
const letters = sadnessDotOnline.querySelectorAll('span');

function fadeIn(letters) {
	let i = 0;
	const interval = setInterval(() => {
		letters[i].classList.add('on');
		i++;
		if (i === letters.length - 5) wave(letters);
		if (i === letters.length) clearInterval(interval);

	}, 100)
}

function wave(letters) {

	function remove() {
		setTimeout(() => {
			this.classList.remove('up');
		}, 80)
	}

	let i = 0;
	const interval = setInterval(() => {
		if (!isAnyPartOfElementInViewport(sadnessDotOnline)) reset(letters);
		const letter = letters[i];
		letter.classList.remove('up');
		letter.classList.add('up');
		letter.addEventListener('transitionend', remove);
		i++
		if (i === letters.length) i = 0;
	}, 120)
}

function reset(letters) {
	letters.forEach(letter => {
		letter.classList.remove('up');
	})
}

function isAnyPartOfElementInViewport(el) {

	const rect = el.getBoundingClientRect();
	const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

	// http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
	const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
	const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

	return (vertInView && horInView);
}

// go
fadeIn(letters)
