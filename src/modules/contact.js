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
    const cateringContainer = document.createElement('section');
    cateringContainer.classList.add('catering-container');

    //const banner = createBanner('cards','Catering Options')
    //cateringContainer.appendChild(banner);
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

const infoMenu = function(){
    const infoSection = document.createElement('section');
    infoSection.classList.add('info-container');

    const banner = createBanner('aboutus','Camacis Pizzeria');
    infoSection.appendChild(banner);

    //Main info Section
    const infoGrid = document.createElement('div');
    infoGrid.classList.add('info-grid');
    infoSection.appendChild(infoGrid);
    //about card
    const about = document.createElement('div');
    about.classList.add('about-card');
    about.classList.add('info-card')
    const aboutTitle = document.createElement('h3');
    const aboutText = document.createElement('p');
    aboutTitle.innerText = "About Us";
    aboutText.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis similique, commodi quis sequi voluptatum officiis! Aut nam tempore culpa voluptas.'
    about.append(aboutTitle,aboutText);
    //input card
    const inputCard = document.createElement('div');
    inputCard.classList.add('input-card');
    inputCard.classList.add('info-card');

    const inputTitle = document.createElement('h3');
    inputTitle.innerText = 'Get News and Offers!';
    //input wrapper
    const inputWrap = document.createElement('div');
    inputWrap.classList.add('wrap-input');
    //creat input
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type','email');
    inputEmail.setAttribute('id',`aboutemail`)
    inputEmail.setAttribute('name',`about-email`)
    inputEmail.setAttribute('placeholder','Enter Your Email.')
    //btn
    const inptBtn = document.createElement('div');
    inptBtn.classList.add('inpt-btn');


    inputWrap.append(inputEmail,inptBtn);
    inputCard.append(inputTitle,inputWrap);

    const hoursCard = document.createElement('div');
    hoursCard.classList.add('hours-card');
    hoursCard.classList.add('info-card')

    const hoursTitle = document.createElement('h3')
    hoursTitle.innerText = 'Our Hours';

    

    const hoursInfo = document.createElement('div')
    hoursInfo.classList.add('hours-info');
    
    //times div
    const times = document.createElement('div');
    times.classList.add('times')
    const week = document.createElement('p');
    week.innerText = "Mon - Thurs: 10AM - 10PM"

    const weekEnd = document.createElement('p');
    weekEnd.innerText = "Fri - Sat: 12PM - 12AM";

    const sunday = document.createElement('p');
    sunday.innerText = 'Sunday: Closed'
    
    times.append(week,weekEnd,sunday);
    

    //contact info
    const addressContainer = document.createElement('div');
    addressContainer.classList.add('address-container');
    const numAdd = document.createElement('p');
    numAdd.innerText = '7370 Grand Ave'

    const street = document.createElement('p');
    street.innerText = ' Elmwood Park'

    const zipState = document.createElement('p');
    zipState.innerText = 'Illinois, 60707'

    const phone = document.createElement('p');
    phone.innerText = 'Phone: +555-555-555';


    addressContainer.append(numAdd,street,zipState,phone);
    hoursInfo.append(times,addressContainer)
    hoursCard.append(hoursTitle,hoursInfo)




    infoGrid.append(about,inputCard,hoursCard);






    


    return infoSection

    



}














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
    //formContainer.appendChild(cateringCards());


    

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
        contactForm(),
        cateringCards(),
        infoMenu()
    )
    
};



export{
    loadContact,
    infoMenu
}



