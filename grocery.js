/*
To get this to run, type:
tsc "grocery.ts"
into powershell. A new JS file will be created.
*/
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, groceryType) {
        this.name = name;
        this.quantity = quantity;
        this.groceryType = groceryType;
        this.name = name;
        this.quantity = quantity;
        this.groceryType = groceryType;
    }
    return Grocery;
}());
function listPrinter(listItems) {
    return listItems.groceryType + ": " + listItems.name + " - " + listItems.quantity + '<br>';
}
var item_1 = new Grocery("Apples", 14, "Fruit");
var item_2 = new Grocery("Cookies", 3, "Dessert");
var item_3 = new Grocery("Broccoli", 5, "Vegetable");
var groceryList = [item_1, item_2, item_3];
for (var _i = 0, groceryList_1 = groceryList; _i < groceryList_1.length; _i++) {
    var item = groceryList_1[_i];
    document.body.innerHTML += listPrinter(item);
}
