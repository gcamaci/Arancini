import {loadHome} from "./home";
import {loadMenu} from "./menu";
import{loadAbout} from './about'
import{loadContact} from './contact'

function createHeader(){
    const header = document.createElement('header');
    header.appendChild(getTitle())
    header.appendChild(createNav())
    header.appendChild(createBanner('','head'))
    return header

};
function createBanner(caption,style){

    const banner = document.createElement('div');
    banner.classList.add(`${style}-banner`);
    
    const title = document.createElement('h1');
    title.classList.add(`${style}-text`)
    
    title.innerText = `${caption}`;

    banner.append(title)

    return banner

};

function updateHeader (page){
    const title = document.querySelector('.head-text');
    title.innerText =''
    if(page!=='Home'){
        title.innerText=`${page}`;
    }else{return}

    
}



function getTitle (){
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Camaci's Pizzeria";
    return title
}
function createNav(){
    const nav = document.createElement('nav');

    let btnArray = [];
    
    const home = document.createElement('button');
    home.classList.add('nav-btn');
    home.type = 'button';
    home.innerText = 'Home';
    home.name = 'home'
    btnArray.push(home);

    const menu = document.createElement('button');
    menu.classList.add('nav-btn');
    menu.type = 'button';
    menu.name = 'menu';
    menu.innerText = 'Menu';
    btnArray.push(menu);
    
    const about = document.createElement('button');
    about.classList.add('nav-btn');
    about.type = 'button';
    about.name = 'about';
    about.innerText = 'About';
    btnArray.push(about);

    const contact = document.createElement('button');
    contact.classList.add('nav-btn');
    contact.type = 'button';
    contact.name = 'contact';
    contact.innerText = 'Contact';
    btnArray.push(contact);

    btnArray.forEach((btn) => {
        btn.dataset.page = btn.name;
        nav.appendChild(btn);
        btn.addEventListener('click',()=>{
           mainFinder(btn.dataset.page)
        });
    });

    return nav;
}






function mainFinder(data){
    const main = document.querySelector('main')
    main.innerHTML = '';
    if(data === 'home'){
        loadHome()
        
    }
    else if(data === 'menu'){
        loadMenu();
    }
    else if(data === 'about'){
        loadAbout();
    }
    else if(data =='contact'){
        loadContact()
    }

}
const render = (() => {
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    document.body.appendChild(createHeader());
    document.body.appendChild(main);
    document.body.appendChild(footer);
    loadHome();

})();
export{
    render,
    mainFinder,
    updateHeader,
    createBanner,
};