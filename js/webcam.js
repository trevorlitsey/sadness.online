function renderWebCam(canvas) {

	const video = document.createElement('video');
	const ctx = canvas.getContext('2d');

	function getVideo() {
		navigator.mediaDevices.getUserMedia({ video: true, audio: false })
			.then(localMediaStream => {
				video.src = window.URL.createObjectURL(localMediaStream);
				video.play();
			})
			.catch(err => {
				console.error(`cannot get user video!`, err);
			});
	}

	function paintToCanvas() {
		const width = video.videoWidth;
		const height = video.videoHeight;
		canvas.width = width;
		canvas.height = height;

		return setInterval(() => {
			ctx.drawImage(video, 0, 0, width, height);
			// take the pixels out
			let pixels = ctx.getImageData(0, 0, width, height);
			// mess with them
			pixels = rgb(pixels);

			ctx.globalAlpha = 1;

			// put them back
			ctx.putImageData(pixels, 0, 0);
		}, 16);
	}

	function rgb(pixels) {
		for (let i = 0; i < pixels.data.length; i += 4) {
			pixels.data[i + 0] = pixels.data[i + 0] - 50; // RED
			pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
			pixels.data[i + 2] = pixels.data[i + 2] - 50; // Blue
		}
		return pixels;
	}

	getVideo();

	video.addEventListener('canplay', paintToCanvas);

}

const webcamCanvas = document.getElementById('webcam');

renderWebCam(webcamCanvas);