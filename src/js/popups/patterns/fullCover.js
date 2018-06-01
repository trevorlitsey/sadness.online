function fullCover() {
	const popups = [];
	let direction = true;
	let j;
	for (let i = -5; i < 100; i += 15) {
		direction ? (j = -5) : (j = 95);
		while (j > -10 && j < 100) {
			const popOptions = {
				width: `${20}%`,
				height: 'auto',
				top: `${i}%`,
				left: `${j}%`,
				right: 'auto',
			};
			popups.push(popOptions);
			direction ? (j += 12) : (j -= 12);
		}
		direction = !direction;
	}

	return popups;
}

export default fullCover;
