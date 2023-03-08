const carrouselItems = document.getElementsByClassName("info-carrousel-item");

let carrouselIndex = 0;

const rightButtonClick = () => {

    // Bump active index

    const nextCarrouselIndex = carrouselIndex + 1 <= carrouselItems.length - 1 ? carrouselIndex + 1 : 0;

    const currentCarrouselItem = document.querySelector(`[data-index="${carrouselIndex}"]`),
        nextCarrouselItem = document.querySelector(`[data-index="${nextCarrouselIndex}"]`);

    // Active item becomes after

    currentCarrouselItem.dataset.status = "after";

    // Next item becomes active 

    nextCarrouselItem.dataset.status = "active"

    carrouselIndex = nextCarrouselIndex;

    console.log(carrouselIndex);
}

const leftButtonClick = () => {

    // Bump active index

    const nextCarrouselIndex = carrouselIndex - 1 >= 0 ? carrouselIndex - 1 : carrouselItems.length - 1;

    const currentCarrouselItem = document.querySelector(`[data-index="${carrouselIndex}"]`),
        nextCarrouselItem = document.querySelector(`[data-index="${nextCarrouselIndex}"]`);

    // Active item becomes after

    currentCarrouselItem.dataset.status = "before";

    // Next item becomes active 

    nextCarrouselItem.dataset.status = "active"

    carrouselIndex = nextCarrouselIndex;

    console.log(carrouselIndex);
}