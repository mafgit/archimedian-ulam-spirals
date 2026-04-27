const homeBtn = document.getElementById("home-btn");

function hideIntro() {
	canvas.classList.add("visible")
	intro.classList.remove("visible")
	homeBtn.classList.add("visible")
    animStopped = false
}

function showIntro() {
	canvas.classList.remove("visible")
	intro.classList.add("visible");
	homeBtn.classList.remove("visible")
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
