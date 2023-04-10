const mouseTrailer = document.getElementById("mouse-trailer");
const mouseTrailerBack = document.getElementById("mouse-trailer-back");
//needed a real element instead of a pseudo class for the transition effects

window.onpointermove = (event) => {
	const { clientX, clientY } = event;

	mouseTrailer.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 3000, fill: "forwards" }
	);
	mouseTrailerBack.animate(
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

	setTimeout(() => {
		console.log("teste:setting up gradients opacity");

		// set the current gradient to full opacity
		// back to no opacity
		rootStyle.setProperty("--trailer-opacity", 1);
		rootStyle.setProperty("--trailer-before-opacity", 0);

		console.log("teste2: current gets its old colors");

		// current keeps its colors
		rootStyle.setProperty("--trailer-color-1", trailerColorOld1);
		rootStyle.setProperty("--trailer-color-2", trailerColorOld2);
	}, 1000);

	setTimeout(() => {
		console.log("teste3: before gets new ones");

		// back gets the new ones
		rootStyle.setProperty("--trailer-color-old-1", trailerColor1);
		rootStyle.setProperty("--trailer-color-old-2", trailerColor2);

		console.log("teste4: opacity current 0 before 1");

		// current to 0
		// back's opacity is set to 1
		rootStyle.setProperty("--trailer-opacity", 0);
		rootStyle.setProperty("--trailer-before-opacity", 1);
	}, 2000);
	// back now visible, current is not
	setTimeout(() => {
		console.log("teste5: real element gets new colors");
		// give current the new colors
		rootStyle.setProperty("--trailer-color-1", trailerColor1);
		rootStyle.setProperty("--trailer-color-2", trailerColor2);

		console.log("teste6: real is made visible, before invisible");

		// real one is visible
		// back opacity to 0
		rootStyle.setProperty("--trailer-opacity", 1);
		rootStyle.setProperty("--trailer-before-opacity", 0);
	}, 3000);
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
