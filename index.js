let ctx;

// center
let cx;
let cy;

const fontSize = 8;

let animStopped = true;

function resetCanvas() {
	ctx = canvas.getContext("2d");

	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	cx = canvas.width / 2;
	cy = canvas.height / 2;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// bg
	ctx.fillStyle = "#03000f";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function isPrime(n) {
	if (n <= 1) return false;

	for (let i = 2; i * i <= n; i++) {
		if (n % i === 0) return false;
	}

	return true;
}
