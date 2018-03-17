const startSpeechDetection = (fn) => {

	// too remember last words on page
	let lastWordsTimestamp = 0;

	// initiate speech recoginiation
	window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
	const recognition = new SpeechRecognition();
	recognition.interimResults = true;

	console.log('listening');

	// listen for incoming speech
	recognition.addEventListener('result', e => {

		const transcript = Array.from(e.results)
			.map(result => {
				if (result[0].isFinal = true) return result[0];
			})
			.map(result => result.transcript)
			.join('')
			.toLowerCase();

		// return if it has been less than 2 seconds
		if (lastWordsTimestamp >= Date.now() - 3000) return;

		// return if no relavent keyword is found
		if (['yes', 'true', 'start', 'begin', 'again', 'next', 'really', 'oh', 'ok'].indexOf(transcript.toLowerCase()) === -1) return;

		// if keyword is found call the function that was passed in
		fn();

		lastWordsTimestamp = Date.now();

	});

	// start over at end
	recognition.addEventListener('end', recognition.start);

	// rollin'
	recognition.start();
}

export default startSpeechDetection;