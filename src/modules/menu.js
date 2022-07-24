import panelle from '../images/panelle.png';
import arancini from '../images/arancini.png';
import panzeroti from '../images/panzerotti.png';
import beef from '../images/italian-beef.png';
import sfincone from '../images/sfincione.png';
import eggplant from '../images/eggplant.png';
import nutella from '../images/nutella.png';
import cornetto from '../images/cornetto.png';

const createToppings = () => {
    const toppingsContainer = document.createElement('div');
    toppingsContainer.classList.add('toppings');
    const toppingList = document.createElement('ul');
    
    const toppings = [
        'Pepperoni',
        'Sausage',
        'Prosciuto',
        'Artichoke',
        'Mushroom',
        'Onions',
        'Green Pepper',
        'Black Olives',
        'Hot Giardenera',
        'Basil'
    ]
    
    toppings.forEach((topping)=>{
        const item = document.createElement('li');
        item.innerText = topping;
        item.classList.add('top');
        toppingList.appendChild(item)

    });

    toppingsContainer.appendChild(toppingList);


    return toppingsContainer
};


const newCard = (name,desc,price,item) => {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const namePrice = document.createElement('div');
    namePrice.classList.add('name-price');

    const header = document.createElement('h2');
    header.classList.add('card-header');
    header.innerText = name;

    const cardPrice = document.createElement('p');
    cardPrice.classList.add('card-price');
    cardPrice.innerText = price;

    
    const description = document.createElement('p');
    description.classList.add('card-desc');
    description.innerText = desc;

    const image = document.createElement('img');
    image.classList.add('img')
    image.src = item;

    namePrice.append(header,cardPrice)

    card.append(image,namePrice,description);


    return card
}

const menuCardContainer = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('card-container');

    const menuArray = [
        {
            name:"Arancini",
            desc:"Balls of rice stuffed with peas, meat sauce, and cheese. 4CT ",
            price: "$7.99",
            picture: arancini

        },
        {
            name:"Panelle",
            desc:"Sicilian fritters made from chickpea flour, with lemon and pepper",
            price: "$4.99",
            picture: panelle

        },
        {
            name:"Panzeroti",
            desc:"Deep fried dough pocket filled with fresh tomato sauce, cheese, and basil",
            price: "$3.99",
            picture: panzeroti
        },
        {
            name:"Italian Beef",
            desc:"Classic Chicago beef with your choice of peppers",
            price: "$7.99",
            picture: beef
        },
        {
            name:"Sfincione",
            desc:"Sicilian style thick cut pizza, by the slice",
            price: "$2.99",
            picture: sfincone
        },
        {
            name:"Eggplant Parmesean",
            desc:"Eggplant Parmesean Sandwhich",
            price: "$5.99",
            picture: eggplant
        },
        {
            name:"Nutella Crepes",
            desc:"Nutella Crepes with strawberries",
            price: "$7.99",
            picture: nutella
        },
        {
            name:"Cornetti",
            desc:"Fresh Cornetti (nutella, peach, cream) and a Espresso",
            price: "$9.99",
            picture: cornetto
        },

    ]


    menuArray.forEach((item)=>{
        menuContainer.appendChild(newCard(item.name,item.desc,item.price,item.picture))
    })
    

    return menuContainer;

};

const createSpecial = () => {
    const specialContainer = document.createElement('div');
    specialContainer.classList.add('special-container')
    const specials = [
        {
            name: 'The Giuseppe',
            desc: 'Pepperoni, Sausage, Red Pepper, Roasted Garlic, Pesto'
        },
        {
            name: 'The Giuseppe',
            desc: 'Pepperoni, Sausage, Red Pepper, Roasted Garlic'

        },
        {
            name: 'Vegetarian',
            desc: 'Ricotta and Spinach'

        },
        {
            name: 'Maragita',
            desc: 'Classic sweet tomato sauce with fresh Mozzarella Cheese and Basil'
        },
        {
            name: 'Faccia di Vechia',
            desc: 'Bread with a coating of Olive Oil, Salt, Pepper, Oregeno and Crushed red pepper'

        }
    ]

    specials.forEach((special) => {
        const list = document.createElement('ul');
        list.classList.add('flex-list')
        const listName = document.createElement('li');
        listName.innerText = special.name;
        const listDesc = document.createElement('li');
        listDesc.innerText = special.desc;

        list.append(listName,listDesc);
        specialContainer.appendChild(list);


    });

    return specialContainer;
};

class Menu{

    constructor(){
        this.page = document.createElement('div');
        //this.header = document.createElement('h1');
    };

    pizzaMenu(){

        this.page.classList.add('pizza-Menu')
        //this.header.innerText = "Pizza";
        //this.header.style.fontSize = '4rem'
        

        const buildYourOwn = document.createElement('div');
        buildYourOwn.classList.add('build-your-own');
        //build your own markup
        const ownTitle = document.createElement('h2');
        ownTitle.innerText = 'Build your own';

        const buildDisc = document.createElement('p')
        buildDisc.classList.add('build-disc');
        buildDisc.innerText = 'Choose 3 of any toppings, adittional toppings $1.50';
        
        buildYourOwn.appendChild(ownTitle);
        buildYourOwn.appendChild(buildDisc);
        buildYourOwn.appendChild(createToppings());


        const specials = document.createElement('div');
        specials.classList.add('specials');

        const specialTitle = document.createElement('h2');
        specialTitle.innerText = 'Specials';
        

        


       


        




        specials.appendChild(specialTitle);
        specials.appendChild(createSpecial())

        /*
        this.page.appendChild(this.header);
        this.page.appendChild(pizzaImg1);
        this.page.appendChild(buildYourOwn);
        this.page.appendChild(specials); */

        this.page.append(buildYourOwn,specials)
        
        return this.page
    }

};


const createBanner = (name,caption) => {
    const banner = document.createElement('div');
    banner.classList.add(`${name}-banner`);

    const title = document.createElement('h1');
    title.innerText = `${caption}`;

    banner.append(title)

    return banner

};
const loadMenu = () => {
    
    const main = document.querySelector('main');
    document.body.style.backgroundImage = 'none';
    main.innerHTML = '';
    main.classList.remove('home-page','about-page','contact-page');
    main.classList.add('menu-page');

    const pizza = new Menu();
    const appetizers = new Menu();
    main.append(createBanner('menu','Menu'),pizza.pizzaMenu(),menuCardContainer())
    


 };
 export{
    loadMenu,
    createBanner,
    newCard

 }