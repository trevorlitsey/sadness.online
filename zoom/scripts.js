function setCanvas(canvas, w = 80, h = 40) {

	function mod(n, m) {
		return ((n % m) + m) % m;
	}

	paper.setup(canvas);
	let widthInc = canvas.width / 10;
	let heightInc = canvas.height / 10;
	const centerPoint = new paper.Point(paper.view.center)
	const squares = new paper.Group();

	let i = 0;
	const getRandomGray = () => {
		const hue = i % 2 === 0 ? '100' : '0';
		i++;
		return `hsl(0, 0%, ${hue}%)`;
	}

	const makeNewSquare = (i, color = getRandomGray()) => {
		const [width, height] = [i * (canvas.width / 20), i * (canvas.height / 20)];
		const size = new paper.Size(width, height);
		const center = new paper.Point(centerPoint.x - width / 2, centerPoint.y - height / 2);
		const rectangle = new paper.Rectangle(center, size);
		const newSquare = new paper.Path.Rectangle(rectangle);
		newSquare.fillColor = color;
		newSquare.bringToFront();
		return newSquare;
	}


	populateSquares = () => {
		squares.removeChildren();
		for (let i = 20; i > 0; i--) {
			const square = makeNewSquare(i);
			squares.addChild(square);
		}
	}

	populateSquares();

	// size up
	paper.view.onFrame = () => {
		squares.children.forEach((square, index) => {
			square.bounds.width = square.bounds.width + canvas.width / w
			square.bounds.height = square.bounds.height + canvas.height / h;
			square.bounds.center = centerPoint;
			if (squares.children[1].bounds.width >= canvas.width) {
				squares.removeChildren(0, 1);
				squares.addChild(makeNewSquare(1));
			}
		})
	}

	document.addEventListener('resize', () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		populateSquares;
	});


}
