function archimedian(maxPoints = 1000) {
	resetCanvas();

	const b = 3;

	function drawPoint(r, t, prevCoords = null) {
		let x = cx + r * Math.cos(t) - b / 2;
		let y = cy - (r * Math.sin(t) - b / 2);

		// if (isPrime(r)) ctx.fillStyle = "white";
		// else {
		const rem = r % 3;
		if (rem === 0) ctx.fillStyle = "#84edff";
		else if (rem === 1) ctx.fillStyle = "#ff6a71";
		else if (rem === 2) ctx.fillStyle = "#8cff5f";
		else ctx.fillStyle = "black";

		// ctx.fillStyle = "#000224";
		// }

		ctx.beginPath();
		ctx.roundRect(x, y, b + 1, b + 1, [20]); // + 1 to fix unwanted spaces between rows
		ctx.fill();

		// if (r <= 1) {
		// 	ctx.textAlign = "center";
		// 	ctx.textBaseline = "middle"; // vertical
		// 	ctx.font = `${fontSize} Arial`;
		// 	ctx.fillStyle = "#ffffff";
		// 	ctx.fillText(`(${r},${t})`, x, y);
		// }

		return { x, y };
	}

	// function drawAxes() {
	// 	for (let i = 0; i < 100; i++) {
	// 		ctx.fillRect
	// 	}
	// }

	let i = 1;
	let prevCoords = null;

	function frame() {
		prevCoords = drawPoint(i, i, prevCoords);

		i++;
		if (i <= maxPoints) if (!animStopped) setTimeout(frame, 1);
	}

	frame();

	// ctx.beginPath();
	// ctx.strokeStyle = "blue";
	// ctx.lineWidth = 5;

	// ctx.arc(150, 150, 100, 0, Math.PI, true);
	// ctx.stroke();
}

// archimedian();
