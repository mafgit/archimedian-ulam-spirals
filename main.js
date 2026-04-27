const homeBtn = document.getElementById("home-btn");
const info = document.querySelector(".info");

function hideIntro() {
	window.scrollTo({ behavior:'smooth',left: 0, top: 0 });
	canvas.classList.add("visible");
	intro.classList.remove("visible");
	homeBtn.classList.add("visible");
	document.getElementById("info-btn").classList.add("visible");

	animStopped = false;
}

function showIntro() {
	canvas.classList.remove("visible");
	intro.classList.add("visible");
	homeBtn.classList.remove("visible");
	document.getElementById("info-btn").classList.remove("visible");

	animStopped = true;
}

document.getElementById("ulam-btn").onclick = () => {
	hideIntro();
	info.innerText = "Blue = Prime";
	ulam();
};

document.getElementById("archimedian-btn").onclick = () => {
	hideIntro();
	info.innerText = "White = Prime";
	archimedian();
};

homeBtn.onclick = () => {
	showIntro();
};

// showIntro()
