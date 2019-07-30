const path = document.querySelector('.carousel-path');
const slides = Array.from(path.children);
const nextButton = document.querySelector('.scroll-button--right');
const prevButton = document.querySelector('.scroll-button--left');

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;
// CHECK WIDTH : console.log(slideWidth);

// arrange slides side by side
/* rather loop 
slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px'; */

const setSlidePosition = (slide, index) => {

    slide.style.left = slideWidth * index + 'px';
    };

slides.forEach(setSlidePosition);

const scrollToSlide = (path, currentSlide, targetSlide) => {
    path.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');


}


// at prevButton click move slides left

// at nextButton click move slides right

nextButton.addEventListener('click', e => {
    const currentSlide = path.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    scrollToSlide(path, currentSlide, nextSlide);
       // move to the next slide

  
});

prevButton.addEventListener('click', e => {
    const currentSlide = path.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    scrollToSlide(path, currentSlide, prevSlide);
})