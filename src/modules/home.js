import car1 from '../images/car1.png';
import car2 from '../images/car2.png';
import car3 from '../images/car3.png';
import car4 from '../images/car4.png';
import car5 from '../images/car5.png';

const makeSlider = () => {
    const slideContainer = document.createElement('div');
    slideContainer.classList.add('slider');

    const carouselSlide = document.createElement('div');
    carouselSlide.classList.add('slider-container');
    slideContainer.appendChild(carouselSlide);

    const carOne = document.createElement('img');
    carOne.src = car1;
    carouselSlide.appendChild(carOne);


    const carTwo = document.createElement('img');
    carTwo.src = car2;
    carTwo.alt = "";
    carouselSlide.appendChild(carTwo);


    const carThree = document.createElement('img');
    carThree.src = car3;
    carThree.alt = "";
    carouselSlide.appendChild(carThree);
    
    const carFour = document.createElement('img');
    carFour.src = car4;
    carFour.alt = "";
    carouselSlide.appendChild(carFour);

    const carFive = document.createElement('img');
    carFive.src = car5;
    carFive.alt = "";
    carouselSlide.appendChild(carFive);

    const btnContainer = document.createElement('div')
    //buttons
    const prevBtn = document.createElement('button');
    prevBtn.id = 'prevBtn';
    prevBtn.innerText = 'prev';

    const nextBtn  = document.createElement('button');
    nextBtn.id = 'next';
    nextBtn.innerText = 'next';

    btnContainer.appendChild(prevBtn)
    btnContainer.appendChild(nextBtn)

    slideContainer.appendChild(btnContainer)

   return slideContainer;
}

class Slider{
    constructor({
        sliderSelector = '.slider',
        sliderContainerSelector = '.slider-container',
        previousSelector = '#prevBtn',
        nextSelector = '#next',
        transitionTime = 3000,

    } = {} ){
        this.slider = document.querySelector(sliderSelector);
        this.slides = document.querySelectorAll(`${sliderContainerSelector} img`).length;
        this.sliderContainer = document.querySelector(sliderContainerSelector);
        this.previousBtn = document.querySelector(previousSelector);
        this.nextBtn = document.querySelector(nextSelector);
        this.slideSize = this.slider.clientWidth;
        this.currentSlide = 0;

        this.setEventListeners();
    }
    moveSlides(){
        this.sliderContainer.style.transform = `translateX(-${this.currentSlide * this.slideSize}px)`
    }
    nextSlide(){
        this.currentSlide = this.currentSlide >= this.slides -1 ? 0 : this.currentSlide + 1;
        this.moveSlides();
    }
    previousSlide(){
        this.currentSlide = this.currentSlide <= 0 ? this.slides -1 : this.currentSlide -1;
        this.moveSlides();

    }
    setEventListeners(){
        this.nextBtn.addEventListener('click',this.nextSlide.bind(this))
        this.previousBtn.addEventListener('click',this.previousSlide.bind(this))
    }
}




const loadHome = () => {
    const main = document.querySelector('main');
    main.classList.add('home-page');
    main.appendChild(makeSlider());
    new Slider();
    

}

export{
    loadHome,
}