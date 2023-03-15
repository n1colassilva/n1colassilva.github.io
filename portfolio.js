const carrouselItems = document.getElementsByClassName("info-carrousel-item");

let carrouselIndex = 0;

const rightButtonClick = () => {
    /*
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
    */

    // Saving previous item for trash setting purposes
    // if its lower than zero then bring it to the last item, if not then just go current-1
    const previousIndex = carrouselIndex - 1 < 0 ? carrouselIndex.length - 1 : carrouselIndex - 1;

    // Determines which item is next, if the next is non-existant then it loops back to number 0 
    const nextIndex = carrouselIndex + 1 <= carrouselItems.length - 1 ? carrouselIndex + 1 : 0;

    const currentIndex = document.querySelector(`[data-index="${carrouselIndex}"]`);


    // the magic starts
    // make the current become the previous, make the next the current one
    // just make it be gone and bring in the new one

    currentIndex.dataset.status = "previous"; // <- makes sure it goes left
    nextIndex.dataset.status = "current"; //     <- and this from the right
    previousIndex.dataset.status = "previous"//  <- leaves previous one as previous to avoid problems

    //update the current index "global" variable
    carrouselIndex = nextIndex;
    console.log(carrouselIndex);
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