const userLang = navigator.language || navigator.userLanguage;

if (userLang.startsWith("en")) {
	window.location.href = "../docs/pages/en/en.html";
} else if (userLang.startsWith("pt")) {
	window.location.href = "../docs/pt/pt.html";
}
