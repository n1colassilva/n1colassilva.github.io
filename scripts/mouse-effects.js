const mouseTrailer = document.getElementById("mouse-trailer");

window.onpointermove = (event) => {
	const { clientX, clientY } = event;

	mouseTrailer.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 3000, fill: "forwards" }
	);
};

//changing color of trailer depending on where hovering

let rootStyle = document.documentElement.style;

const mouseColorPlus = () => {
	const activeZone = document.querySelector(`[data-status="current"]`);

	const trailerColors = activeZone.dataset.trailerColor.split(",");

	const trailerColor1 = trailerColors[0];
	const trailerColor2 = trailerColors[1];

	const trailerColorOld1 = getComputedStyle(document.documentElement).getPropertyValue("--trailer-color-1");
	const trailerColorOld2 = getComputedStyle(document.documentElement).getPropertyValue("--trailer-color-2");

	const trailerOpacity = getComputedStyle(document.documentElement).getPropertyValue("--trailer-opacity");
	const trailerBeforeOpacity = getComputedStyle(document.documentElement).getPropertyValue("--trailer-before-opacity");

	// transition for linear gradient
	// i'd like to thank the css team for not having a way to handle this
	// logic is as follows

	rootStyle.setProperty("--trailer-opacity", 1); // set the current gradient to full opacity
	rootStyle.setProperty("--trailer-before-opacity", 0); // before pseudoelem to no opacity

	rootStyle.setProperty("--trailer-color-1", trailerColorOld1); // current keeps its colors
	rootStyle.setProperty("--trailer-color-2", trailerColorOld2);

	rootStyle.setProperty("--trailer-color-old-1", trailerColor1); // before gets the new ones
	rootStyle.setProperty("--trailer-color-old-2", trailerColor2);

	rootStyle.setProperty("--trailer-opacity", 0); // current to 0
	rootStyle.setProperty("--trailer-before-opacity", 1); // before's opacity is set to 1

	// before now visible, current is not

	rootStyle.setProperty("--trailer-color-1", trailerColor1); // give current the new colors
	rootStyle.setProperty("--trailer-color-2", trailerColor2);

	rootStyle.setProperty("--trailer-opacity", 1); // real one is visible
	rootStyle.setProperty("--trailer-before-opacity", 0); // before opacity to 0

	//i spent 3 days on this, shoutout to christ for the holiday
};

// take current element
// transition into transparent

// take :before
// aplly new colors
// start making it visible

// take current after its done transing
// change colors
// make it visible

// take :before
// make it transparent
