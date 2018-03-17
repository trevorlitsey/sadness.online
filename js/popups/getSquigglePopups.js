function getSquigglePopups() {

	const popups = [];

	let direction = true;
	let j = 45;
	for (let i = 0; i < 100; i += 2) {
		const popOptions = {
			width: '20%',
			height: 'auto',
			top: `${j}%`,
			left: `${i}%`,
			right: 'auto',
		}
		popups.push(popOptions);
		direction ? j -= 3 : j += 3;
		if (j > 52) {
			direction = true;
		}
		if (j < 32) {
			direction = false;
		}
	}

	for (let i = 0; i < 100; i += 4) {
		const popOptions = {
			width: '20%',
			top: `2%`,
			right: `${i}%`,
		}
		popups.push(popOptions);
	}

	for (let i = 0; i < 100; i += 4) {
		const popOptions = {
			width: '20%',
			bottom: '2%',
			left: `${i}%`,
			right: `auto`,
		}
		popups.push(popOptions);
	}

	return popups;

}

export default getSquigglePopups;