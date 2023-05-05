const mouseTrailer = document.getElementById("mouse-trailer");
const mouseTrailerTrans = document.getElementById("mouse-trailer-trans");

window.onpointermove = (event) => {
	const { clientX, clientY } = event;

	mouseTrailer.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 3000, fill: "forwards" }
	);
	mouseTrailerTrans.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 3000, fill: "forwards" }
	);
};

//changing color of trailer depending on where hovering

let rootStyle = document.documentElement.style;

const mouseColorUpdate = () => {
	const activeZone = document.querySelector(`[data-status="current"]`);

	const trailerColors = activeZone.dataset.trailerColor.split(",");

	const trailerColor1 = trailerColors[0];
	const trailerColor2 = trailerColors[1];

	const trailerColorOld1 = getComputedStyle(document.documentElement).getPropertyValue("--trailer-color-1");
	const trailerColorOld2 = getComputedStyle(document.documentElement).getPropertyValue("--trailer-color-2");

	// transition for linear gradient
	// i'd like to thank the W3C team for not helping

	rootStyle.setProperty("--trailer-transition-secs", "1s");

	rootStyle.setProperty("--trailer-opacity", 0.7); // set the current gradient to full opacity
	rootStyle.setProperty("--trailer-before-opacity", 0); // before pseudoelem to no opacity

	rootStyle.setProperty("--trailer-color-1", trailerColorOld1); // current keeps its colors
	rootStyle.setProperty("--trailer-color-2", trailerColorOld2);

	rootStyle.setProperty("--trailer-color-old-1", trailerColor1); // before gets the new ones
	rootStyle.setProperty("--trailer-color-old-2", trailerColor2);

	console.log("singing");

	rootStyle.setProperty("--trailer-opacity", 0); // current to 0
	rootStyle.setProperty("--trailer-trans-opacity", 0.7); // before's opacity is set to 1
	console.log("dancing");
	// before now visible, current is not

	setTimeout(() => {
		rootStyle.setProperty("--trailer-transition-secs", "0s");

		rootStyle.setProperty("--trailer-color-1", trailerColor1); // give current the new colors
		rootStyle.setProperty("--trailer-color-2", trailerColor2);

		rootStyle.setProperty("--trailer-opacity", 0.7); // real one is visible
		rootStyle.setProperty("--trailer-trans-opacity", 0); // before opacity to 0

		console.log("rearranging furniture");
	}, 1000);
};

mouseColorUpdate(); // calling function for first time setup

//i spent 3 days on this, shoutout to christ for the holiday
//update: 3 to think how to do it, a further 3 to fix ;-;
