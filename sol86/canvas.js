const resetCanvas = (canvas, ctx) => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.lineWidth = .2;
}

const drawLine = (points) => {
	const [[fromX, fromY], [toX, toY]] = points;

	// draw point
	ctx.strokeStyle = 'rgb(73, 73, 73)';
	ctx.beginPath();
	ctx.moveTo(fromX, fromY);
	ctx.lineTo(toX, toY);
	ctx.stroke();
}