//     000000
//     078900
//     061200
//     054300
//     000000
//          0

//   -    rdlluurr rdddlllluuuurrrr rdddddlllllluuuuuurrrrrr
//  m=0     1         2                  3

// lets say m starts from 0 (but we care from 1), where m is the round
// r1 = 1
// d = 2m-1
// l = 2m
// u = l
// r2 = 2m

function ulam(maxRounds = 50) {
	resetCanvas();

	const b = 10; // box dimension (bxb)

	function drawBox(x, y, n, m) {
		if (isPrime(n)) {
			ctx.fillStyle = "blue";
		} else {
			let rem = m % 3;
			ctx.fillStyle =
				rem === 0
					? "#111111"
					: rem === 1
						? "#242424"
						: rem === 2
							? "#474747"
							: "#474747";
		}

		let newX = x - b / 2;
		let newY = y - b / 2;
		ctx.fillRect(newX, newY, b + 1, b + 1); // + 1 to fix unwanted spaces between rows

		// writing number
		if (m <= 1) {
			ctx.textAlign = "center";
			ctx.textBaseline = "middle"; // vertical
			ctx.font = `${fontSize}px Arial`;
			ctx.fillStyle = "#dadada9e";
			ctx.fillText(n, x, y);
		}
	}

	let currentX = cx;
	let currentY = cy;

	let n = 1; // n = number
	let m = 0; // round or distance from center

	let total = 0,
		r1 = 0,
		d = 0,
		l = 0,
		u = 0,
		r2 = 0,
		i = 0;

	function frame() {
		if (i < r1) {
			currentX += b;
		} else if (i < r1 + d) {
			currentY += b;
		} else if (i < r1 + d + l) {
			currentX -= b;
		} else if (i < r1 + d + l + u) {
			currentY -= b;
		} else {
			currentX += b;
		}

		drawBox(currentX, currentY, n, m);
		n++;
		i++;

		if (i >= total) {
			m++;
			i = 0;

			r1 = 1;
			d = 2 * m - 1;
			l = 2 * m;
			u = l;
			r2 = 2 * m;

			total = r1 + d + l + u + r2;
		}

		if (m < maxRounds) {
			// requestAnimationFrame(frame);
			if (!animStopped)
				setTimeout(() => {
					frame();
				}, 10);
		}
	}

	frame();
}

// uval();
