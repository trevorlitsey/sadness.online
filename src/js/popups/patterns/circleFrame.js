import fullPagePop from './fullPagePop';

function circleFrame() {
	const popups = [];
	const radius = 40;

	for (let i = 0; i < 2; i += 0.05) {
		const x = 40 + Math.round(radius * Math.cos(i * Math.PI));
		const y = 40 + Math.round(radius * Math.sin(i * Math.PI));

		const popOptions = {
			width: '20%',
			height: 'auto',
			top: `${y}%`,
			left: `${x}%`,
			right: 'auto',
		};
		popups.push(popOptions);
	}

	popups.push(fullPagePop());

	return popups;
}

export default circleFrame;
