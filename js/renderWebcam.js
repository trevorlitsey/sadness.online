let increment = -30;

export function alterIncrement(num) {
	increment += num;
	return increment;
}

function renderWebcam(canvasOne, canvasTwo, delay = 3000) {

	const video = document.createElement('video');
	const ctxOne = canvasOne.getContext('2d');
	const ctxTwo = canvasTwo.getContext('2d');

	function getVideo() {
		navigator.mediaDevices.getUserMedia({ video: true, audio: false })
			.then(localMediaStream => {
				video.srcObject = localMediaStream;
				video.play();
			})
			.catch(err => {
				console.error(`cannot get user video!`, err);
			});
	}

	function paintToCanvas() {
		const width = video.videoWidth;
		const height = video.videoHeight;
		canvasOne.width = width;
		canvasOne.height = height;
		canvasTwo.width = width;
		canvasTwo.height = height;

		return setInterval(() => {
			ctxOne.drawImage(video, 0, 0, width, height);
			// take the pixels out
			let pixels = ctxOne.getImageData(0, 0, width, height);
			// mess with them
			pixels = rgb(pixels);

			ctxOne.globalAlpha = 1;

			// put them back
			ctxOne.putImageData(pixels, 0, 0);
			setTimeout(() => {
				requestAnimationFrame(() => {
					ctxTwo.putImageData(pixels, 0, 0);
				})
			}, delay)
		}, 16);
	}

	function rgb(pixels) {
		for (let i = 0; i < pixels.data.length; i += 4) {
			pixels.data[i + 0] = pixels.data[i + 0] + increment; // RED
			pixels.data[i + 1] = pixels.data[i + 1] + increment; // GREEN
			pixels.data[i + 2] = pixels.data[i + 2] + increment; // Blue
		}
		return pixels;
	}

	getVideo();

	video.addEventListener('canplay', paintToCanvas);

}

export default renderWebcam;