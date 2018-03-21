function getRandomPopups(num) {

	const popups = [];

	for (let i = 0; i < num; i++) {
		const popOptions = {
			width: '20%',
			left: `${Math.round(Math.random() * 120 - 10)}%`,
			top: `${Math.round(Math.random() * 120 - 10)}%`,
		}
		popups.push(popOptions);
	}

	return popups;

}

export default getRandomPopups;