import car1 from '../images/mel-fest1.png';
import arancini from '../images/arancini.png';
import { mainFinder } from './render';
import { createBanner } from './menu';
import { infoMenu } from './contact';

const createSection = (name,imgSrc,htext,ptext,btn) => {
    const section = document.createElement('section');
    section.classList.add(`${name}-section`);

    const festImage = document.createElement('img');
    festImage.src = imgSrc;

    const bannerText = document.createElement('div');
    const title = document.createElement('h2')
    title.innerText = htext;

    const para = document.createElement('p');
    para.innerText = ptext;
    
    bannerText.append(title,para)
    section.append(festImage,bannerText);

    if(btn){
        const contactButton = document.createElement('button');
        contactButton.addEventListener('click',()=>{
            mainFinder('contact')
        });
        contactButton.classList.add('contact-btn');
        contactButton.innerText = "Contact Us";
        bannerText.appendChild(contactButton);

    }
    return section

}



const loadAbout = () => {
    const main = document.querySelector('main');
    document.body.style.backgroundImage = 'none';
    main.innerHTML = '';
    main.classList.remove('menu-page','home-page','contact-page');
    main.classList.add('about-page');

    main.append(
        createBanner('about','About Us'),
        createSection('fest',car1,'Join Us Labor Day Weekend','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, tempora repudiandae? Ullam consectetur illum excepturi quod ratione esse quaerat iste?',false),
        createSection('catering',arancini,'Contact Us for Catering','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, tempora repudiandae? Ullam consectetur illum excepturi quod ratione esse quaerat iste?',true),
        infoMenu()
    )
}

export {
    loadAbout,
}

