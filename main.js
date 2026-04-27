const homeBtn = document.getElementById("home-btn");

function hideIntro() {
	canvas.style.display = "block";
	intro.style.display = "none";
	homeBtn.style.display = "block";
    animStopped = false
}

function showIntro() {
	canvas.style.display = "none";
	intro.style.display = "flex";
	homeBtn.style.display = "none";
    animStopped = true
}

document.getElementById("ulam-btn").onclick = () => {
	hideIntro();
	ulam();
};

document.getElementById("archimedian-btn").onclick = () => {
	hideIntro();
	archimedian();
};

homeBtn.onclick = () => {
	showIntro();
};

// showIntro()
