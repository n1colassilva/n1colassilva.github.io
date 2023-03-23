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

    //evil ternary mischief TODO: implement this wizardry properly to avoid weird transitions in the back
    nextNextIndexNumber == carrouselIndex.length - 1 ?
        previousIndex.dataset.status = "transitioning"
        : previousIndex.dataset.status = "previous";

    currentIndex.dataset.status = "previous"
    nextIndex.dataset.status = "current"
    nextNextIndex.dataset.status = "next"

    // Update the current index variable
    carrouselIndex = nextIndexNumber;
}

// similar  code as rightButtonClick, but change the status because we are going back
// and want it to always come from the correct direction
const leftButtonClick = () => {


    /*
    determining what is the previous index and its element 
    (if current-1 < 0 then its the last one, else its just current -1)
    */
    const previousIndexNumber = carrouselIndex - 1 < 0 ? carrouselItems.length - 1 : carrouselIndex - 1;
    const previousIndex = document.querySelector(`[data-index="${previousIndexNumber}"]`);
    console.log(`previous index: ${previousIndexNumber}`);

    const previousPreviousIndexNumber = previousIndexNumber - 1 < 0 ? carrouselItems.length - 1 : previousIndexNumber - 1;
    const previousPreviousIndex = document.querySelector(`[data-index="${previousPreviousIndexNumber}"]`);
    console.log(`the next next index: ${previousPreviousIndexNumber}`);

    //current index is just taken from the global variable
    //later on its updated, thats why we can rely on it
    const currentIndex = document.querySelector(`[data-index="${carrouselIndex}"]`);
    console.log(`current index: ${currentIndex.dataset.index}`);

    // if the next + 1 < the highest index then the next is just the current + 1, if not then it loops back to 0
    const nextIndexNumber = carrouselIndex + 1 < carrouselItems.length ? carrouselIndex + 1 : 0;
    const nextIndex = document.querySelector(`[data-index="${nextIndexNumber}"]`);
    console.log(`next index: ${nextIndexNumber}`);


    previousPreviousIndex.dataset.status = "previous"
    previousIndex.dataset.status = "current"
    currentIndex.dataset.status = "next"
    nextIndex.dataset.status = "next"

    // Update the current index variable
    carrouselIndex = previousIndexNumber;
}