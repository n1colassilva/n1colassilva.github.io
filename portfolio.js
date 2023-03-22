const carrouselItems = document.getElementsByClassName("info-carrousel-item");

let carrouselIndex = 0;

const rightButtonClick = () => {

    /*
    determining what is the previous index and its element 
    (if current-1 < 0 then its the last one, else its just current -1)
    */
    const previousIndexNumber = carrouselIndex - 1 < 0 ? carrouselItems.length - 1 : carrouselIndex - 1;
    const previousIndex = document.querySelector(`[data-index="${previousIndexNumber}"]`);
    console.log(`previous index: ${previousIndexNumber}`);

    //current index is just taken from the global variable
    //later on its updated, thats why we can rely on it
    const currentIndex = document.querySelector(`[data-index="${carrouselIndex}"]`);
    console.log(`current index: ${currentIndex.dataset.index}`);

    // if the next + 1 < the highest index then the next is just the current + 1, if not then it loops back to 0
    const nextIndexNumber = carrouselIndex + 1 < carrouselItems.length ? carrouselIndex + 1 : 0;
    const nextIndex = document.querySelector(`[data-index="${nextIndexNumber}"]`);
    console.log(`next index: ${nextIndexNumber}`);

    const nextNextIndexNumber = nextIndexNumber + 1 <= carrouselItems.length - 1 ? nextIndexNumber + 1 : 0;
    const nextNextIndex = document.querySelector(`[data-index="${nextNextIndexNumber}"]`);
    console.log(`the next next index: ${nextNextIndexNumber}`);

    previousIndex.dataset.status = "previous"
    currentIndex.dataset.status = "previous"
    nextIndex.dataset.status = "current"
    nextNextIndex.dataset.status = "next"

    // Update the current index variable
    carrouselIndex = nextIndexNumber;
}

// similar  code as rightButtonClick, but change the status because we are going back
// and want it to always come from the correct direction
const leftButtonClick = () => {

    const previousIndex = carrouselIndex - 1 < 0 ? carrouselIndex.length - 1 : carrouselIndex - 1;

    //const nextIndex = carrouselIndex + 1 <= carrouselItems.length - 1 ? carrouselIndex + 1 : 0;

    const currentIndex = document.querySelector(`[data-index="${carrouselIndex}"]`)


    currentIndex.dataset.status = "next" //      <- makes sure current goes right
    previousIndex.dataset.status = "current"; // <- previous comes from the left
    nextIndex.dataset.status = "next"//          <- leaves the 2nd next as next. Why? idk!

    //update variable!
    carrouselIndex = previousIndex
    console.log(carrouselIndex);


    /*// Bump active index

    const nextCarrouselIndex = carrouselIndex - 1 >= 0 ? carrouselIndex - 1 : carrouselItems.length - 1;

    const currentCarrouselItem = document.querySelector(`[data-index="${carrouselIndex}"]`),
        nextCarrouselItem = document.querySelector(`[data-index="${nextCarrouselIndex}"]`);

    // Active item becomes after

    currentCarrouselItem.dataset.status = "before";

    // Next item becomes active 

    nextCarrouselItem.dataset.status = "active"

    carrouselIndex = nextCarrouselIndex;

    console.log(carrouselIndex);*/
}