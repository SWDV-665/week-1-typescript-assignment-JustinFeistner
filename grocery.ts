/*
To get this to run, type:
tsc "grocery.ts"
into powershell. A new JS file will be created. 
*/

class Grocery {
    constructor(public name: string, public quantity: number, public groceryType: string) {
        this.name = name;
        this.quantity = quantity;
        this.groceryType = groceryType;
    }
}

interface listItems {
    name: string;
    quantity: number;
    groceryType: string;
}

function listPrinter(listItems: listItems){
    return listItems.groceryType + ": " + listItems.name + " - " + listItems.quantity + '<br>';
}

let item_1 = new Grocery("Apples", 14, "Fruit");
let item_2 = new Grocery("Cookies", 3, "Dessert");
let item_3 = new Grocery("Broccoli",5, "Vegetable");

let groceryList = [item_1, item_2, item_3];

for (let item of groceryList) {
    document.body.innerHTML += listPrinter(item)
}

