const createInput = (attributes) => {
    const inputContainer = document.createElement('div');

    const label = document.createElement('label')
    label.setAttribute('for',`${attributes[0]}`);

    const input = document.createElement('input');
    input.setAttribute('type',`${attributes[1]}`);
    input.setAttribute('id',`${attributes[2]}`)
    input.setAttribute('name',`${attributes[2]}`)
    input.setAttribute('placeholder',`${attributes[3]}`)
    inputContainer.append(label,input);


    return inputContainer


};





const contactForm = () => {
    const formContainer = document.createElement('section');
    formContainer.classList.add('form-container');

    const inputs = [
        ['name','text','name','Full Name'],
        ['email','email','email','example@gmail.com'],
    ]


    const form = document.createElement('form');
    form.setAttribute('id','form');
    form.setAttribute('action'," ")
    form.setAttribute('method','post');

    inputs.forEach((input)=>{
        form.appendChild(createInput(input));

    })
    
    const textArea = document.createElement('textarea');
    textArea.setAttribute('placeholder','This is a text area')

    form.appendChild(textArea);
    formContainer.appendChild(form);
    


    return formContainer
    
}


const loadContact = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.classList.remove('menu-page','home-page','about-page');
    main.classList.add('contact-page');
    

    main.appendChild(contactForm())
    
};



export{
    loadContact,
}



