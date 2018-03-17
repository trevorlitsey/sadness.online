

function getPictureFramePopups() {

	const popups = [];

	// top
	for (let i = -5; i < 100; i += 15) {
		const popOptions = {
			width: '20%',
			height: 'auto',
			top: '-5%',
			left: `${i}%`,
			right: 'auto',
		}
		popups.push(popOptions);
	}

	// right
	for (let i = 10; i < 100; i += 15) {
		const popOptions = {
			width: 'auto',
			height: '20%',
			top: `${i}%`,
			left: '85%',
			right: 'auto',
		}
		popups.push(popOptions);
	}

	// bottom
	for (let i = 85; i > 0; i -= 15) {
		const popOptions = {
			width: '20%',
			height: 'auto',
			top: '85%',
			left: `${i}%`,
			right: 'auto',
		}
		popups.push(popOptions);
	}

	// left
	for (let i = 85; i > 0; i -= 15) {
		const popOptions = {
			width: 'auto',
			height: '20%',
			top: `${i}%`,
			left: 'auto',
			right: '85%',
		}
		popups.push(popOptions);
	}

	return popups;
}

export default getPictureFramePopups;
