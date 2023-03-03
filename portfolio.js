const carrouselItems = document.getElementsByClassName("info-carrousel-item");

let carrouselIndex = 0;

const rightButtonClick = () => {

    // Bump active index

    const nextCarrouselIndex = activeIndex + 1 <= carrouselItems.length - 1 ? activeIndex + 1 : 0;

    const currentCarrouselItem = document.querySelector(`[data-index="${activeIndex}"]`),
        nextCarrouselItem = document.querySelector(`[data-index="${nextCarrouselIndex}"]`);
    
    // Active item becomes after

    currentCarrouselItem.dataset.status = "after";

    // Next item becomes active 

    nextCarrouselItem.dataset.status = "active"
}