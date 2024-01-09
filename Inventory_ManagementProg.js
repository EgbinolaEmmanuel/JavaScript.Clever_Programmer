//Inventory Setup:

//Create an array to store product objects in your inventory.
//Each product object should have properties like id, name, price, and quantity.
//Display Inventory:

//Implement a function to display all the products in your inventory with their details.
//Calculate Total Value:

//Implement a function to calculate the total value of a specific product based on its price and quantity.//

let readline = require('readline-sync')

Products = [
    Smartphones = { id: 101, name : 'infinix', price: 85000, quantity: 56},
    Laptops = {id: 102, name: 'dell', price: 150000, quantity: 74 },
    Tshirts = {id: 103, name: 'gucci', price: 2700, quantity: 167}, 
    Jeans = {id: 104, name: 'jwen', price: 8000, quantity: 240 }, 
    Jackets = {id: 105, name: 'Tommy Hillfiger', price: 6500, quantity: 70}, 
    Refrigerators = {id: 106, name: 'thermocool', price: 125000, quantity: 40}, 
    Washing_Machines = {id: 107, name: 'gree', price: 750000, quantity: 167}, 
    Microwaves = {id: 108, name: 'jwen', price: 8000, quantity: 240}, 
    Soccer_Balls = {id: 109, name: 'jwen', price: 8000, quantity: 240},
    Tennis_Rackets = {id: 110, name: 'jwen', price: 8000, quantity: 240}, 
    Shampoo = {id: 111, name: 'jwen', price: 8000, quantity: 240},
     Skincar_Products = {id: 112, name: 'jwen', price: 8000, quantity: 240}, 
    Hairdryers = {id: 113, name: 'jwen', price: 8000, quantity: 240} // LATER ON, TRY HAVING TO 
]


let displayProducts = () => {

    for (product of Products) {
        console.log(product.name, '======', product.price)
    }
    
}

console.log('\n\n\nWelcome to our Inventory Store\n')
console.log('These is where we list all of your product in our store\n\n')

while (true) {


 console.log('INVENTORY FEATURES:\n\n')

 console.log('1.) Display Inventory >>>      2.) Add Inventory Product >>>      3.) Taking an Order via your I_product >>>      ')
 console.log('4.) Calculating Product Value >>>      5.) Product Filtering >>>    6.)  Product Update >>>      ')


 let OptFeat = readline.question('Input Option >>>')

 if (OptFeat == '1') {
    console.log('\n\n\n')
    for (product of Products) {
        console.log(product.name + '   ======   ' + product.price + '\n\n\n');
    }

    console.log('Exit The Inventory System  == type YES ')
    console.log('Back to Main Menu == type main_menu')
    console.log('Re - Display Inventory System == type redisplay')

    OptFeat = readline.question('Input End Option >>>');


    if (OptFeat == 'yes' || OptFeat == 'Yes') {
        break;
    } else if (OptFeat == 'redisplay') {
        for (int = 0; 10 > int; int++) {

         for (product of Products) {
          console.log(product.name + '   ======   ' + product.price);
         };
        
         OptFeat= readline.question('Back to menu (Yes/No) >> ')

         if (OptFeat == 'Yes' || OptFeat == 'yes') {
            break; 
        }
    }
    //Night Task : 
    //    Work on Option 2: 
 } else if(OptFeat == '2') {
    //Calculating total value.

 }

}
}

console.log('\n\n\nThanks for reaching out to us');

