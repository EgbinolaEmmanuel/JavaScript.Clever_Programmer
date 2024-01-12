//Create an inventory store that 
//Display One's Product; Add One's Product to the recent Ones; Ordering Product

readline = require('readline-sync') // Input Authentication.

Products = [

    Laptops = [{id: 101,name:'dell', price: 1500, quantity: 50},
               {id: 102,name:'Apple', price: 2700, quantity: 50},
               {id: 103,name:'HP', price: 1850, quantity: 50}],
    Clothing = [{id: 201,name:'Tshirt', price: 25, quantity: 50},
                {id: 202,name:'Jean', price: 47, quantity: 50},
                {id: 203,name:'Round-Neck', price: 15, quantity: 50}],
    Books_and_Media= [{id: 301,name:'DVD', price: 40, quantity: 50},
                      {id: 302,name:'RDPD', price: 1500, quantity: 50, author: 'robert kiyosaki'},
                      {id: 303,name:'Music CD\'s', price: 1500, quantity: 50}]

]

ProductName = ['Laptops', 'Clothing', 'Books_and_Media']

function exit1() {
  console.log('To Re-Display Product:\t Press redisplay')
  console.log('Back to main menu:\t Press main_menu' )
  console.log('Exit Inventory Application:\t Press Exit\n\n\n')
  
  input = readline.question('Input Option >>>')
  if (input == 'redisplay' || input == 'REDISPLAY') {
     //Displaying product name; price and quantity again, if wanted by users.
     for (product of Products) {
      console.log(product,' ', ':\n\n');
      for (property in product) {
        console.log( 'PRODUCT NAME:\t', property.name, '\t\tPrice:\t', property.price, '\t\tQuantity:\t', property.quantity)
      }
     }
  } else if (input == 'exit' || input == 'EXIT' ) {
    //break;
    }
}



//program Starting.
console.log('Welcome to Our Inventory Store')

while (true) {

   

   console.log('\n\nDASHBOARD:\n')

   console.log('\tPRODUCTS :')
   for (product of ProductName){
    console.log('\t\t',product)
    }

   console.log('\nTotal:', ProductName.length,' ', 'Products\n')
   
   console.log('1.) Display Product >>>     2.) Product Adding >>>     3.) Product ordering >>>\n\n')
   let input = readline.question('Input Option Number >>>')

   
   if (input == '1') {  //Displaying Product.
      let productCounter = 0;  //Will be used to navigate each inventory product in order for its display.
      let productAmount = Products.length;

      for (let name of ProductName) { //used to iterate each value in ProductName. for the each product data to be displayed.
      
        counter = 0;
        console.log(name, ':', '\n')  // Calling Product Namw
        while (productAmount > counter) {   // will be used to loop through every of the inventory product data for displaying.
          console.log('\n\nProduct Name:\t',Products[productCounter][counter].name, '\t\tPrice\t:', Products[productCounter][counter].price, '\t\tquantity\t:', Products[productCounter][counter].quantity)
          counter += 1;
        }
      
        productCounter += 1;
      }

      
      //exit
        console.log('To Re-Display Product:\t Press redisplay')
        console.log('Back to main menu:\t Press main_menu' )
        console.log('Exit Inventory Application:\t Press Exit\n\n\n')
      
        input = readline.question('Input Option >>>')
        if (input == 'redisplay' || input == 'REDISPLAY') {

         //Displaying product name; price and quantity again, if wanted by users.
         let productCounter = 0;  //Will be used to navigate each inventory product in order for its display.
         let productAmount = Products.length;

         for (let name of ProductName) { //used to iterate each value in ProductName. for the each product data to be displayed.
      
          counter = 0;
          console.log(name, ':', '\n')  // Calling Product Namw
          while (productAmount > counter) {   // will be used to loop through every of the inventory product data for displaying.
          console.log('\nProduct Name:\t',Products[productCounter][counter].name, '\t\tPrice\t:', Products[productCounter][counter].price, '\t\tquantity\t:', Products[productCounter][counter].quantity, '\n\n')
          counter += 1;
          }
      
          productCounter += 1;
         }
        } else if (input == 'exit' || input == 'EXIT' ) {
        break;
          } //exit function
     
   }else if(input == '2') {

      console.log('We will get back to you as always')

    }







}
