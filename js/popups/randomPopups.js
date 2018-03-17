function getRandomPopups(num) {

	const popups = [];

	for (i = 0; i < num; i++) {
		popOptions = {
			width: '20%',
			left: Math.round(Math.ranom() * 100),
			top: Math.round(Math.ranom() * 100),
		}
		popups.push(popOptions);
	}

	return popups;

}

export default getRandomPopups;