const userLang = navigator.language || navigator.userLanguage;

if (userLang.startsWith("en")) {
	window.location.href = "pages/en/en.html";
} else if (userLang.startsWith("pt")) {
	window.location.href = "pages/pt/pt.html";
}
