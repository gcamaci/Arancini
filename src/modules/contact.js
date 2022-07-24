import { createBanner, newCard} from "./menu";
import panelle from '../images/panelle.png';
import arancini from '../images/arancini.png';
import panzeroti from '../images/panzerotti.png';



const createInput = (attributes) => {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-wrapper');

    const label = document.createElement('label')
    label.setAttribute('for',`${attributes[0]}`);
    label.innerText = `${attributes[1]}`

    const input = document.createElement('input');
    input.setAttribute('type',`${attributes[2]}`);
    input.setAttribute('id',`${attributes[3]}`)
    input.setAttribute('name',`${attributes[3]}`)
    input.setAttribute('placeholder',`${attributes[4]}`)
    inputContainer.append(label,input);


    return inputContainer


};

const cateringCards = () => {
    const cateringContainer = document.createElement('div');
    cateringContainer.classList.add('catering-container');

    const banner = createBanner('cards','Catering Options')
    cateringContainer.appendChild(banner);
    const cards = [
        {
            name:"Arancini",
            desc:"Balls of rice stuffed with peas, meat sauce, and cheese. 4CT ",
            price: "50ct, 100ct, 250ct",
            picture: arancini

        },
        {
            name:"Panelle",
            desc:"Sicilian fritters made from chickpea flour, with lemon and pepper",
            price: "50ct, 100ct, 250ct",
            picture: panelle

        },
        {
            name:"Panzeroti",
            desc:"Deep fried dough pocket filled with fresh tomato sauce, cheese, and basil",
            price: "50ct, 100ct, 250ct",
            picture: panzeroti
        }

    ]
    
    cards.forEach((card)=>{
        let itemCard = newCard(card.name,card.desc,card.price,card.picture);
        itemCard.classList.add('catering-card')
        cateringContainer.appendChild(itemCard)

    });
    
    

    return cateringContainer

};



const contactForm = () => {
    const formContainer = document.createElement('section');
    formContainer.classList.add('form-container');
    
    //create form
    const form = document.createElement('form');
    form.setAttribute('id','form');
    form.setAttribute('action'," ")
    form.setAttribute('method','post');

    //create banner and append it 
    const banner = createBanner('form','Contact Us');
    const desc = document.createElement('p');
    desc.innerText = 'For catering pricing and options please contact us and we will get back as soon as possible!';
    banner.appendChild(desc);
    form.append(banner);

    //array of input array, pass through Create input
    const inputs = [
        ['name','Name:','text','name','Full Name'],
        ['email','Email:','email','email','example@gmail.com'],
    ]

    inputs.forEach((input)=>{
        form.appendChild(createInput(input));

    })
    

    const textArea = document.createElement('textarea');
    textArea.setAttribute('placeholder','This is a text area');

    const subBtn = document.createElement('button');
    subBtn.setAttribute('type','button');
    subBtn.innerText = "Send"

    form.append(textArea,subBtn)
    formContainer.appendChild(form);
    formContainer.appendChild(cateringCards());


    

    return formContainer
    
}


const loadContact = () => {
    const main = document.querySelector('main');
    document.body.style.backgroundImage = 'none';
    main.innerHTML = '';
    main.classList.remove('menu-page','home-page','about-page');
    main.classList.add('contact-page');
    
   
    main.append(
        createBanner('contact',"Contact Us"),
        contactForm()
    )
    
};



export{
    loadContact,
}



