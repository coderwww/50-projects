const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slideLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

//slideLeft.style.top = `-${(slideLength-1)*100}vh`;
slideLeft.style.top = `-${(slideLength-1)*100}%`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex >= slideLength){
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0){
            activeSlideIndex = slideLength - 1;
        }
    }
   
    slideRight.style.transform =`translateY(-${(activeSlideIndex*sliderHeight)}px)`;
    slideLeft.style.transform =`translateY(${(activeSlideIndex*sliderHeight)}px)`;
}