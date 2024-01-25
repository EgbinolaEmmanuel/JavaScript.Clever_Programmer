readline = require('readline-sync');

console.log('Spinnage\n')
console.log('Let make some spin to win\n\n')

let balance ;
let NewBalance;
const column = 3;
const row = 3;

function account(NewBalance) {

 while (true) {
   NewBalance = readline.question('How much are you willing to balance up in your account\n\t\t\t  >>> $')
  
   NewBalance = parseInt(NewBalance)

   if (typeof NewBalance == 'number' && !isNaN(NewBalance)) {  //to validate actual figure if numeric, then it is true
    console.log('Account Validation is Correct\n\n')
    break;} else {
        console.log('Incorrect Numeric Figure\nPlease try to write a correct account balance\n\n')
    }
    


    NewBalance = NewBalance + balance;  //Updating actual balance in accoun}
  }

  return NewBalance

}

function character(){
  let choose;

  while (true) {
      console.log('Choose Character for the game\n\n')
      console.log('Will you like to use\n 1.) Number 2.) Fruit 3.) Alphabet 4.) Symbol')
      choose = readline.question(' Input Character you would like to choose >>>')
      if (typeof choose != 'number' && isNaN(choose)) {
        break;
      }else {
        console.log('\nIncorrect ... Input option value by their name\n')
      }
  }

  return choose;
}

function spinAmountAndCost(Balance) {
    let spin;
    //Then ask how many Spin are you rolling in for\n\n 1 or 2 or 3 or more (Input Option) >>>')
    //collect spin amount and validate if numeric figures and see if the spin amount is not above the minimum or maximum spin.
    //Then see if the bet amount is sufficient for the account balance.
    
    while (true) {  // For validating the numeric figures and the amount of spin to take.
     let minimumSpin = 0;
     let maximumSpin = 5;

     spin = readline.question('How many spin are you taking \n\n 1 or 2 or 3 or more (Input Numeric option) >>>')
     spin = parseInt(spin);
     if (!isNaN(spin)) {
       if (minimumSpin < spin && spin <= maximumSpin) {
         break
       }else {
        console.log('Time Amount of spin should be above 0 and not above 5')
        console.log('Rewrite the amount of spin\n')
       }
   
      }
    }

    while (true) { //validating the amount to place on each on bet

      betPrice = readline.question('How much are you placing for each spin\n (Input Amount of Dollar) >>> $')
      totalAmountOfSpin = betPrice * spin; // price of each bet TIMES the amount of bet to be taken
      //then validate if the account is sufficient for the spin bet.
      if (!(Balance > totalAmountOfSpin)){
        console.log('Sufficient Balance for the spin bets')
        console.log('Rewrite amount for each spin bet')
      } else {
        break;
      }
    
    


    }
   

    return spin
 
}

function spinGame( spinAmount ) {
 // creating a loop depending on the amount of times the user would like to spin
 //Then using it to create generated numbers of rows and columns
  let count = 0;
  let rowCount= 0;
  let columnCount = 0;

  let aColumnList = []
  let columnList = []
  let columnLists = []
   //for each row 

  while( spinAmount > count) { // Repeating itself in order to create generated number of rows and column depeding on the amount of spin
    
    //creating numbers in rows with times of numeric column
    while ( column > columnCount ) {  //repeating itself to create 3 generated number list in a column
      aColumnList.length = 0;
      randomNumber = 0;

      while( row > rowCount) { //repeating itself to create number in a list
        randomNumber = Math.floor(Math.random() * 3)

         aColumnList.push(randomNumber)
         rowCount = rowCount + 1
      }
      
      rowCount = 0 //stopped right here in having to reboot all counting variables in order for other remaining repeating loops to take it place
      //
      columnList.push(aColumnList)
      columnCount = columnCount + 1
    }
   columnLists.push(columnList)
   count = count + 1
    
  }

  return columnLists
}


let main = () => {
    
    let Balance = account(NewBalance);
    let Character = character();
    let Spin = spinAmountAndCost(Balance);
    let SpinGame = spinGame ( Spin );
    

    console.log(Balance, Character, Spin)
    console.log(SpinGame)

    }

main()