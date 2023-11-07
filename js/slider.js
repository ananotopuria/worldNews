export const slider = function(){
    const slides = document.querySelectorAll(`.hero__slider--slide`);
    const btnLeft = document.querySelector(`.hero__slider--btns-btn-left`);
    const btnRight = document.querySelector(`.hero__slider--btns-btn-right`);

    let curSlide = 0;
    const maxSlide = slides.length;

    //functions

    const goToSlide = function(slide){
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}vw)`)
        );

    
    }

    //Next Slide

    const nextSlide = function () {
        if(curSlide === maxSlide - 1){
            curSlide = 0;
        }else {
            curSlide++;
        }
        goToSlide(curSlide);
    }
    // Previous Slide

    const prevSlide = function () {
        if(curSlide === 0){
            curSlide = maxSlide - 1;

        }else{
            curSlide--;
        }
        goToSlide(0);
    }
    const init = function(){
        goToSlide(0);
    }

    init();

    //Event handlers

    btnRight.addEventListener(`click`, nextSlide);
    btnLeft.addEventListener(`click`, prevSlide);
    

    document.addEventListener(`keydown`, function(e){
        if(e.key === `ArrowLeft`) prevSlide();
        e.key === `ArrowRight` && nextSlide();
    });
};