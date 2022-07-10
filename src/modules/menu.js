const createMenuItem = () => {

};

class Menu{
    constructor(){
        this.page = document.createElement('div');
        this.header = document.createElement('h3');
    };
    pizzaMenu(){
        this.header.innerText = "hello";
        this.page.appendChild(this.header);
        return this.page
    }

};

 const loadMenu = () => {
    const main = document.querySelector('main');
    const menu = new Menu();
    main.appendChild(menu.pizzaMenu())


 };
 export{
    loadMenu,

 }