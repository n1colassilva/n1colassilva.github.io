// time to implement this: 3 weeks
// god save whoever else needs to implement this some other day
// in theory its eternally looping with possibility for expansion

// logic is as follows (excluding the in function documentation):

/*
the only things with transitions are the current and whatever is coming in
when something is coming out it gains the -from-current version of the class that sports a transition
the previous and next just put it in the right position for transitioning
everything else is unknown, so it gets placed in the middle being invisible
so when the button is clicked the unknown, if its the next or previous, gets in position via the next and previous, still no transition 
*/

//credit to hyperplexed for sharing the logic for another version of something similar

const carouselItems = document.getElementsByClassName("info-carousel-item");

let carouselIndex = 0;

const rightButtonClick = () => {


    //determining what is the previous index and its element 
    //(if current-1 < 0 then its the last one, else its just current -1)
    const previousIndexNumber = carouselIndex - 1 < 0 ? carouselItems.length - 1 : carouselIndex - 1;
    const previousIndex = document.querySelector(`[data-index="${previousIndexNumber}"]`);


    //current index is just taken from the global variable
    //later on its updated, thats why we can rely on it
    const currentIndex = document.querySelector(`[data-index="${carouselIndex}"]`);


    // if the next + 1 < the highest index then the next is just the current + 1, if not then it loops back to 0
    const nextIndexNumber = carouselIndex + 1 < carouselItems.length ? carouselIndex + 1 : 0;
    const nextIndex = document.querySelector(`[data-index="${nextIndexNumber}"]`);


    const nextNextIndexNumber = nextIndexNumber + 1 <= carouselItems.length - 1 ? nextIndexNumber + 1 : 0;
    const nextNextIndex = document.querySelector(`[data-index="${nextNextIndexNumber}"]`);


    previousIndex.dataset.status = "unknown";
    currentIndex.dataset.status = "previous-from-current"
    nextIndex.dataset.status = "current"
    nextNextIndex.dataset.status = "next"

    // Update the current index variable
    carouselIndex = nextIndexNumber;
}

// similar  code as rightButtonClick, but change the status because we are going back
// and want it to always come from the correct direction
const leftButtonClick = () => {


    /*
    determining what is the previous index and its element 
    (if current-1 < 0 then its the last one, else its just current -1)
    */
    const previousIndexNumber = carouselIndex - 1 < 0 ? carouselItems.length - 1 : carouselIndex - 1;
    const previousIndex = document.querySelector(`[data-index="${previousIndexNumber}"]`);


    const previousPreviousIndexNumber = previousIndexNumber - 1 < 0 ? carouselItems.length - 1 : previousIndexNumber - 1;
    const previousPreviousIndex = document.querySelector(`[data-index="${previousPreviousIndexNumber}"]`);


    //current index is just taken from the global variable
    //later on its updated, thats why we can rely on it
    const currentIndex = document.querySelector(`[data-index="${carouselIndex}"]`);
    console.log(`current index: ${currentIndex.dataset.index}`);


    // if the next + 1 < the highest index then the next is just the current + 1, if not then it loops back to 0
    const nextIndexNumber = carouselIndex + 1 < carouselItems.length ? carouselIndex + 1 : 0;
    const nextIndex = document.querySelector(`[data-index="${nextIndexNumber}"]`);


    previousPreviousIndex.dataset.status = "previous"
    previousIndex.dataset.status = "current"
    currentIndex.dataset.status = "next-from-current"
    nextIndex.dataset.status = "unknown"

    // Update the current index variable
    carouselIndex = previousIndexNumber;
}