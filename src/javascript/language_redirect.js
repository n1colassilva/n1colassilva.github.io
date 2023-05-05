const userLang = navigator.language || navigator.userLanguage;

if (userLang.startsWith("en")) {
	window.location.href = "/en";
} else if (userLang.startsWith("pt")) {
	window.location.href = "/pt-br";
} else {
	window.location.href = "/en";
}
