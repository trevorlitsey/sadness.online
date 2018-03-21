function getZigZagPopups() {
	const popups = [];
	let direction = true;
	let y = -10;
	for (let x = -10; x < 100; x += 1.76) {
		const popOptions = {
			width: `${20}%`,
			bottom: `${y}%`,
			left: `${x}%`,
		}
		popups.push(popOptions);
		direction ? y += 6 : y -= 6;
		if (x < 90 && (y < -10 || y > 100)) direction = !direction;
	}
	direction = !direction;

	return popups;
}

export default getZigZagPopups;