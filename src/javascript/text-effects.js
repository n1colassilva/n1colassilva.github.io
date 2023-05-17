const landingPageFella = document.getElementById("waving-arms");

setInterval(() => {
	setTimeout(() => {
		landingPageFella.innerHTML = "| (• ᗜ •)";
	}, 125);

	setTimeout(() => {
		landingPageFella.innerHTML = "\\ (• ᗜ •)";
	}, 250);
}, 250);

// Retrieve all elements with the "text-effect" class
const textEffectWanters = document.getElementsByClassName("text-effect");

// Loop through each element
for (let i = 0; i < textEffectWanters.length; i++) {
	const element = textEffectWanters[i];
	const settings = element.dataset.textEffectSettings.split(",");

	// Add a mouseover event listener to the element
	element.addEventListener("mouseover", function () {
		textLoad(element, settings);
	});

	// Trigger the text effect immediately after page load
	window.addEventListener("load", function () {
		textLoad(element, settings);
	});
}

// Define the character sets
const charSets = {
	alphabet: "abcdefghijklmnopqrstuvwxyz",
	capital: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	symbol: "!@#$%¨&*()_+{}[]^~ßæ©µçĸˀħŋđðŧ←",
	box: "█▓▒░█░▀█▄▌▐█▌▀▀██▓▒░",
	number: "123456789",
	hexadecimal: "123456789ABCDEFabcdef",
	japanese: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンー",
};

// Function to load text with the specified effect
function textLoad(element, settings) {
	const letterSet = charSets[settings[0]] || "";
	const iterationAmount = parseInt(settings[1], 10);
	const msTime = parseInt(settings[2], 10);

	let iteration = 0;

	let interval = null;
	clearInterval(interval);

	interval = setInterval(() => {
		element.innerText = element.innerText
			.split("")
			.map((_, index) => {
				if (index < iteration) {
					return element.dataset.text.charAt(index);
				}

				return letterSet.charAt(Math.floor(Math.random() * letterSet.length));
			})
			.join("");

		if (iteration >= element.dataset.text.length) {
			clearInterval(interval);
		}

		iteration += 1 / iterationAmount;
	}, msTime);
}

/*
	document.getElementById("hack-out").onmouseover = (event) => {
		let iteration = 0;
		const chars = "abcdefghijklmnopqrstuvwxyz!@#$%ß/\\|<>^~{}[]";
		let interval = null;
	
		clearInterval(interval);
	
		interval = setInterval(() => {
			event.target.innerText = event.target.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return event.target.dataset.text[index];
					}
	
					return chars[Math.floor(Math.random() * chars.length)];
				})
				.join("");
	
			if (iteration >= event.target.dataset.text.length) {
				clearInterval(interval);
			}
	
			iteration += 1 / 5;
		}, 30);
	};
	*/
