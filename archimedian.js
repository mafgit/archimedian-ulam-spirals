function archimedian(
	showOnlyPrimes = false,
	dontGivePrimesSeparateColor = false,
	maxPoints = 1000,
) {
	if (showOnlyPrimes && dontGivePrimesSeparateColor)
		throw new Error("Both modes can't be true at the same time");

	resetCanvas();

	function chooseColorFromOptions(r) {
		const rem = r % 5;
		if (rem === 0) return "#84edff";
		else if (rem === 1) return "#fffc5f";
		else if (rem === 2) return "#8cff5f";
		else if (rem === 3) return "#ff5ff2";
		else if (rem === 4) return "#ff6a71";
		else return "black";
	}

	let b = 3;

	function draw(x, y) {
		ctx.beginPath();
		ctx.roundRect(x, y, b, b, [20]);
		ctx.fill();
	}

	function drawPoint(r, t) {
		let prime = isPrime(r);

		if (showOnlyPrimes && !prime) return;

		let x = cx + r * Math.cos(t) - b / 2;
		let y = cy - (r * Math.sin(t) - b / 2);

		if (dontGivePrimesSeparateColor) {
			ctx.fillStyle = chooseColorFromOptions(r);
		} else {
			if (prime) ctx.fillStyle = "white";
			else ctx.fillStyle = chooseColorFromOptions(r);
		}

		draw(x, y);

		// if (r <= 1) {
		// 	ctx.textAlign = "center";
		// 	ctx.textBaseline = "middle"; // vertical
		// 	ctx.font = `${fontSize} Arial`;
		// 	ctx.fillStyle = "#ffffff";
		// 	ctx.fillText(`(${r},${t})`, x, y);
		// }
	}

	// function drawAxes() {
	// 	for (let i = 0; i < 100; i++) {
	// 		ctx.fillRect
	// 	}
	// }

	let i = 1;

	function frame() {
		drawPoint(i, i);

		i++;
		if (i <= maxPoints) if (!animStopped) setTimeout(frame, 30);
	}

	frame();
	// ctx.beginPath();
	// ctx.strokeStyle = "blue";
	// ctx.lineWidth = 5;

	// ctx.arc(150, 150, 100, 0, Math.PI, true);
	// ctx.stroke();
}

// archimedian();
