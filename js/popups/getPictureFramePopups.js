

function getPictureFramePopups() {

	const popups = [];

	// top
	for (let i = -5; i < 100; i += 15) {
		const popOptions = {
			width: '20%',
			top: '-5%',
			left: `${i}%`,
		}
		popups.push(popOptions);
	}

	// right
	for (let i = 10; i < 100; i += 15) {
		const popOptions = {
			height: '20%',
			top: `${i}%`,
			right: '0%',
		}
		popups.push(popOptions);
	}

	// bottom
	for (let i = 85; i > 0; i -= 15) {
		const popOptions = {
			width: '20%',
			top: '85%',
			left: `${i}%`,
		}
		popups.push(popOptions);
	}

	// left
	for (let i = 85; i > 0; i -= 15) {
		const popOptions = {
			height: '20%',
			top: `${i}%`,
			left: '0%',
		}
		popups.push(popOptions);
	}

	return popups;
}

export default getPictureFramePopups;
