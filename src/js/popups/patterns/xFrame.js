function xFrame() {
	const popups = [];

	for (let i = 0; i < 100; i += 5) {
		const popOptions = {
			width: '20%',
			height: 'auto',
			top: `${i}%`,
			left: `${i}%`,
			right: 'auto',
		};
		popups.push(popOptions);
	}

	for (let i = 100; i > 0; i -= 5) {
		const popOptions = {
			width: '20%',
			height: 'auto',
			top: `${100 - i}%`,
			left: `auto`,
			right: `${100 - i}%`,
		};
		popups.push(popOptions);
	}

	return popups;
}

export default xFrame;
