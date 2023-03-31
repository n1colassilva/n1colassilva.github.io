const mouseTrailer = document.getElementById("mouse-trailer");

window.onpointermove = event => {
    const { clientX, clientY } = event;

    mouseTrailer.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 100000, fill: "forwards" });
}