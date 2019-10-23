class Grocery():
    def __init__(self, name, quantity, groceryType):
        self.name = name
        self.quantity = quantity
        self.groceryType = groceryType

    def getName(self):
        return self.name
    
    def getQuantity(self):
        return self.quantity

    def getType(self):
        return self.groceryType

    def addToQuantity(self, amountToAdd):
        self.quantity += amountToAdd

    def subtractFromQuantity(self,amountToSubtract):
        if (self.quantity - amountToSubtract) < 0:
            print("You cannot subtract {}. You only have {} of this item.".format(amountToSubtract, self.quantity))
        else:
            self.quantity -= amountToSubtract

item_1 = Grocery("Apples", 14, "Fruit")
item_2 = Grocery("Cookies", 3, "Dessert")
item_3 = Grocery("Broccoli", 5, "Vegetable")

groceryList = [item_1, item_2, item_3]

for item in groceryList:
    print("{}: {} - {}".format(item.getType(), item.getName(), item.getQuantity()))
