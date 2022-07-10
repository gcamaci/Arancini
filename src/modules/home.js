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

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    //change this all to divs with background URL. Will fit better. 
    
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
};

const buildBanner = () => {
    const banner = document.createElement('div');
    banner.classList.add('banner-container');

   

    const bannerTitle = document.createElement('div');
    bannerTitle.classList.add('banner-title');

    const bannerHeader = document.createElement('h2')
    bannerHeader.textContent = "Benvenuti a Tutti";

    const bannerPara = document.createElement('p');
    bannerPara.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur voluptatum commodi exercitationem. Perspiciatis cupiditate placeat laudantium iure tempore aliquid nostrum voluptate";
    
    
    bannerTitle.appendChild(bannerHeader);
    bannerTitle.appendChild(bannerPara);

    banner.appendChild(bannerTitle);
    


    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('banner-btn-container');

    const menuBtn = document.createElement('button');
    menuBtn.type = 'button';
    menuBtn.innerText = "Menu"
    menuBtn.classList.add('banner-menu', 'banner-btn');
    //menuBtn.classList.add('banner-btn','');


    const contactBtn = document.createElement('button');
    contactBtn.type = 'button';
    contactBtn.innerText = 'Contact';
    contactBtn.classList.add('banner-contact','banner-btn');
    //contactBtn.classList.add('banner-btn')

    buttonContainer.appendChild(menuBtn);
    buttonContainer.appendChild(contactBtn);

    banner.appendChild(buttonContainer);
    

    


    return banner
};




const loadHome = () => {
    const main = document.querySelector('main');
    main.classList.add('home-page');
    main.appendChild(makeSlider());
    main.appendChild(buildBanner());
    new Slider();
    

}

export{
    loadHome,
}