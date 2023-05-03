const landingPageFella = document.getElementById("waving-arms");

setInterval(() => {
    setTimeout(() => {
        landingPageFella.innerHTML = "|(^︶^)";
    }, 150);

    setTimeout(() => {
        landingPageFella.innerHTML = "\\(^︶^)";
    }, 300);
}, 300);