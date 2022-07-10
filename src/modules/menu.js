const createToppings = () => {
    const toppingsContainer = document.createElement('div');
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
    toppingsContainer.classList.add('toppings');


    const toppingList = document.createElement('ul');


    return toppingsContainer
};

class Menu{

    constructor(){
        this.page = document.createElement('div');
        this.header = document.createElement('h2');
    };

    pizzaMenu(){

        this.page.classList.add('pizza-Menu')
        this.header.innerText = "pizza";
        this.page.appendChild(this.header);

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


        //build your own topping list.
        const toppings = document.createElement('div');
        toppings.classList.add('toppings');











        buildYourOwn.appendChild(toppings);

        this.page.appendChild(buildYourOwn);
        
        return this.page
    }

    appetizers(){
        //this.page.innerHTML = ''
        this.header.innerText = "world"
        this.page.appendChild(this.header);
        return this.page
    }

};

 const loadMenu = () => {
    
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.classList.remove('home-page','about-page','contact-page');
    main.classList.add('menu-page');

    const pizza = new Menu();
    const appetizers = new Menu();

    main.appendChild(pizza.pizzaMenu())
    main.appendChild(appetizers.appetizers())


 };
 export{
    loadMenu,

 }