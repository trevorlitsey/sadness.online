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


			// put them back
			ctxOne.putImageData(pixels, 0, 0);
			setTimeout(() => {
				requestAnimationFrame(() => {
					ctxTwo.putImageData(pixels, 0, 0);
				})
			}, delay)
		}, 16);
	}

	getVideo();

	video.addEventListener('canplay', paintToCanvas);

}

const canvasOne = document.querySelector('.webcam-canvas--one');
const canvasTwo = document.querySelector('.webcam-canvas--two');

renderWebcam(canvasOne, canvasTwo, 1000);