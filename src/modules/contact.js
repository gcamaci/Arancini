const contactForm = () => {
    const formContainer = document.createElement('section');
    
}









const loadContact = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.classList.remove('menu-page','home-page','about-page');
    main.classList.add('contact-page');
    
    
};

export{
    loadContact
}