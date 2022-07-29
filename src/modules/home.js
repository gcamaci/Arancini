import arancini from '../images/arancini.png';
import Background from '../images/car4.png'
import { mainFinder, updateHeader } from './render';


const buildBanner = () => {
    const banner = document.createElement('div');
    banner.classList.add('banner-container');

    const bannerHeader = document.createElement('h1')
    bannerHeader.textContent = "Camaci's Pizzeria";

    const bannerPara = document.createElement('p');
    bannerPara.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur voluptatum commodi exercitationem. Perspiciatis cupiditate placeat laudantium iure tempore aliquid nostrum voluptate";
    
  
    banner.append(bannerHeader,bannerPara);
    

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
    updateHeader('Home');
    main.innerHTML = '';
    main.classList.remove('menu-page','about-page','contact-page');
    main.classList.add('home-page');
    main.appendChild(buildBanner());
}

export{
    loadHome,
}