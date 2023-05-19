// Define the character sets
const charSets = {
	alphabet: "abcdefghijklmnopqrstuvwxyz",
	capital: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	symbol: "!@#$%¨&*()_+{}[]^~ßæ©µçĸˀħŋđðŧ←",
	box: "█▓▒░█░▀█▄▌▐█▌▀▀██▓▒░",
	number: "123456789",
	hexadecimal: "123456789ABCDEF",
	japanese: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンー",
};

// Function to load text with the specified effect

function textLoadEffect(element) {
	// Avoids running function while it's already going
	if (element.isTextEffectRunning == true) {
		console.log("returned");
		return;
	}
	console.log("keeps going");
	element.isTextEffectRunning = true;

	const settings = element.dataset.textEffectSettings.split(",");
	// settings shall follow the format: Character set, Iterations (how many times each letter should change) and time (in miliseconds)

	const letterSet = charSets[settings[0]] || ""; // Settings come in a string separated by commas
	const iterationAmount = parseInt(settings[1], 10); // How many times will the letter change before going to the next one
	const msTime = parseInt(settings[2], 10); // Time in miliseconds for conclusion of effect
	const ogText = element.originalText.trim(); // apparently trimming it makes things not go invisible, go figure

	let iteration = 0; // Iteration counter

	let interval = null;
	clearInterval(interval);

	interval = setInterval(() => {
		element.textContent = element.textContent
			.trim()
			.split("")
			/* index is the current letter
				iteration gets counted up
				iteration > index causes it to change
				the letter to its final form
				if it isnt then the letter is
				changed to a random symbol
				from the charset string */
			.map((_, index) => {
				if (index < iteration) {
					return ogText.charAt(index);
				}

				return letterSet.charAt(Math.floor(Math.random() * letterSet.length));
			})
			.join("");
		if (iteration >= ogText.length) {
			clearInterval(interval);
		}

		iteration += 1 / iterationAmount;
		/* Counts up the iteration counter
			Not a whole number so that it runs as many required times 
			within  alloted time */

		// Check if this is the last run
		if (iteration > ogText.length) {
			element.isTextEffectRunning = false; // Allow effect to go again
			element.textContent = element.originalText;
			console.log("set");
		}
	}, msTime); // User determined delay for each letter
}

//let isTextEffectRunning = false;

//finds and starts textLoad effect on children of element
function textLoadSectionTrigger(element) {
	const nav_textEffectWanters = element.getElementsByClassName("text-effect");
	console.log(nav_textEffectWanters.length);
	for (let i = 0; i < nav_textEffectWanters.length; i++) {
		textLoadEffect(nav_textEffectWanters[i]);
	}
}

// Retrieve all elements with the "text-effect" class
let allTextEffectWanters = document.getElementsByClassName("text-effect");

// Loop through each element that has the desired class and adds event listeners
for (let i = 0; i < allTextEffectWanters.length; i++) {
	const element = allTextEffectWanters[i];
	element.originalText = element.textContent;

	// Add a mouseover event listener to the element
	element.addEventListener("mouseover", function () {
		textLoadEffect(element);
	});

	// Trigger the text effect immediately after page load
	window.addEventListener("load", function () {
		textLoadEffect(element);
	});

	element.isTextEffectRunning = false; // Property to keep the user from triggering function too many times
}
