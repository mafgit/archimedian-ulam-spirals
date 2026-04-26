const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// center
const cx = canvas.width / 2;
const cy = canvas.height / 2;

const fontSize = 12;

const b = 20; // box dimension (bxb)

function resetCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// bg
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBox(x, y, n) {
	if (isPrime(n)) {
		ctx.fillStyle = "black";
	} else {
		ctx.fillStyle = "blue";
	}

	let newX = x - b / 2;
	let newY = y - b / 2;
	ctx.fillRect(newX, newY, b, b);

	// writing number
	if (n <= 100) {
		ctx.textAlign = "center";
		ctx.textBaseline = "middle"; // vertical
		ctx.font = `${fontSize}px Arial`;
		ctx.fillStyle = "#ffffff9e";
		ctx.fillText(n, x, y);
	}
}

function isPrime(n) {
	if (n <= 1) return false;

	for (let i = 2; i * i <= n; i++) {
		if (n % i === 0) return true;
	}

	return false;
}

//     000000
//     078900
//     061200
//     054300
//     000000
//          0

// rdlluu rrrdddlllluuuu rrrrrdddddlllllluuuuuu
//    0         1                  2
// lets say m starts from 0, where m is the round
// r = 2*m + 1
// d = r
// l = 2*m + 2
// u = l

function main(maxRounds = 100) {
	let currentX = cx;
	let currentY = cy;

	// drawing middle box (1)
	let n = 1; // n = number
	drawBox(cx, cy, 1);
	n++;

	// others
	for (let m = 0; m < maxRounds; m++) {
		const r = 2 * m + 1;
		const d = r;
		const l = 2 * m + 2;
		const u = l;

		let total = r + d + l + u;
		for (let i = 0; i < total; i++) {
			if (i < r) {
				currentX += b;
			} else if (i < r + d) {
				currentY += b;
			} else if (i < r + d + l) {
				currentX -= b;
			} else {
				currentY -= b;
			}

			drawBox(currentX, currentY, n);
			n++;
		}
	}
}

resetCanvas();
main();
