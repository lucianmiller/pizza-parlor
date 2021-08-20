# Pizza Parlor

#### Object-Oriented JavaScript Independent Project for Epicodus, 8/18/2021

#### By Lucian Miller

## Description

Come to the Pizza Parlor and order yourself a wonderful Pizza! We have many sizes and toppings to choose from! Just tell us what you want from the menu and will give you a price! This website was used to test the knowledge I have learned about objects so far and implement them into one cohesive site.

## Setup/Installation Requirements

* Clone this Repository
* Open File
* Open index.html
* Select your toppings and size
* Press the order button

# Specs

```js
Describe: Pizza()
Test: "It should create a Pizza object with properties of size, topping and price equaling 0"
Code: 
let pizzaOrder = new Pizza(0);
Expected Output: 
pizzaOrder.size = 0;
pizzaOrder.topping = 0;
pizzaOrder.price = 0;

Describe: Pizza.prototype.addTopping()
Test: "It should push toppings into this.toppings"
Code:
let pizzaOrder = new Pizza (0)
pizzaOrder.addTopping(3);
Expected Output: 
pizzaOrder.price = [3];

Describe: Pizza.prototype.calculatePrice()
Test: "It should return 0"
Code:
let pizzaOrder = new Pizza (0);
pizzaOrder.calculatePrice();
Expected Output:
pizzaOrder.price = 0;

Describe: Pizza.prototype.calculatePrice()
Test: "It should calculate price for the size of pizza"
Code:
let pizzaOrder = new Pizza (3);
pizzaOrder.calculatePrice();
Expected Output: pizzaOrder.price = 10;

Describe: Pizza.prototype.calculatePrice()
Test: "It should calculate price for the size and topping of pizza"
Code:
let pizzaOrder = new Pizza (3);
pizzaOrder.calculatePrice();
Expected Output: pizzaOrder.price = 14;
```

## Known Bugs

No known bugs as of this version

## Support and contact details

lucian.miller185@gmail.com

## Technologies Used

* git
* VS code
* HTML
* CSS
* BootStrap
* JavaScript
* jQuery

### License

*This software is licensed under the MIT license*

Copyright (c) 2021 Lucian Miller
