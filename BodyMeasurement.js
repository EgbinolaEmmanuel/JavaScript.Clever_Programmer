
const readline = require('readline-sync')

console.log('\n\n\n                Welcome to BODY__-__ Measurement Tidy           ')
console.log('           --Quantifying the Measurement Mass and size Of Any Body--\n\n\n')



function calcBMI() {

    console.log('Okay\nPlease fill up these details');
    console.log('( ---please remember that our AVG weight and height are limited to certain quantification in our data model--- \n\n)')
     let weight = readline.question('Your Body Weight >>> ' );
     let height= readline.question('Your Body Height >>> ');
    
    let intHeight = parseInt(height)

    heightInMeter = intHeight/100
    squaredHeightInMeter = heightInMeter ** 2;

    bmi = weight / squaredHeightInMeter;
    bmi = bmi.toFixed(2)


    if ( 18.5 >= bmi ) {
      return 'Under Weight';
    } else if ( 18.5 < bmi && bmi <= 25 ) {
       return 'Normal Weight';
    } else if ( 25 < bmi && bmi <= 30) {
        return 'Over Weight';
    } else {
        return 'Obese';
    }

    

}


while (true) {

   console.log('Pick from the following OPTION');
   console.log('1.)  Body Mass Index   ', '2.)  Waist-to-Hip Ratio (WHR)\n');
   console.log('3.)  Body Fat Percentage', '4.) Muscle Mass\n\n');

   const option = readline.question('>>')

   if (option == '1') {
    
    let bmi = calcBMI();
    console.log('Body Mass Index: ', bmi,'\n\n\n');
    break;
     } // add the other feature options in this areas condition


}