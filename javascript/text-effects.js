const landingPageFella = document.getElementById("waving-arms");

setInterval(() => {
	setTimeout(() => {
		landingPageFella.innerHTML = "| (• ᗜ •)";
	}, 125);

	setTimeout(() => {
		landingPageFella.innerHTML = "\\ (• ᗜ •)";
	}, 250);
}, 250);
