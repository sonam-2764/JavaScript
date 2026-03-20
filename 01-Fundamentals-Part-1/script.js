// let js = 'amazing';
// console.log(40+8 + 23 -10);
// console.log("Jonas");

// let firstName = "Matidla";
// console.log(firstName);

// let country = "India";
// let continent ="Asia";
// const population = "1400000000";
// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = true;
// var language;
// console.log(typeof isIsland, population, country, language);
// language = "Hindi";
// console.log(language);


// const nameFirst = "Shraddha";
// const lastName = "Pratyaksh";
// console.log(nameFirst+' '+ lastName);
// //2 ** 3 means 2 to the power of 3 = 2*2*2

// const ageabc = "32";
// const agexyz = "43";
// console.log(ageabc > agexyz);
// const isFullAge = ageabc > agexyz;
// console.log(isFullAge);

// let population2 = population/2;
// console.log(population2);

// console.log(population2 + 1);
// const populationFinland = "6000000";
// console.log(population2 > populationFinland);
// const avgpopulation = "33000000";
// console.log(population2 < avgpopulation);
// let description = "Portugal is in Europe, and its 11 million people speak Portuguese";
// console.log(description);
 

// var massOfMark = 78;
// var heightOfMark = 1.69;
// var massOfJohn = 92;
// var heightOfJohn = 1.95;

// var BMIOfMark = massOfMark / heightOfMark ** 2;
// var BMIOfJohn = massOfJohn / (heightOfJohn * heightOfJohn);

// let markHigherBMI = BMIOfMark > BMIOfJohn;
// console.log(BMIOfMark, BMIOfJohn, markHigherBMI);

// massOfMark = 95;
// heightOfMark = 1.88;
// massOfJohn = 85;
// heightOfJohn = 1.76;
//  BMIOfMark = massOfMark / heightOfMark ** 2;
//  BMIOfJohn = massOfJohn / (heightOfJohn * heightOfJohn);

//  console.log(BMIOfMark, BMIOfJohn, markHigherBMI);

//  const myName = "Maitri";
//  const job = "student";
//  const birthyear = 2005;
//  const year = 2025;
//  const Maitri = "I'm " + myName + ',a '+ (year-birthyear) +' years old '+ job +'!';
//  console.log(Maitri);
// // for using template literals we need to use the symbol above the tab button 
// const MaitriNew = `I'm ${myName}, a ${year-birthyear} years old ${job}!`;
// console.log(MaitriNew);
// console.log(`Just a regular string...`);
// console.log('String with \n\
// multiple \n\
// lines');
// console.log(`String 
// multiple
// lines 
// using 
// this button`);

// /*const age = 19;
// const isOldEnough = age >= 18;
// if(isOldEnough){
//     console.log("Maitri can drive🚗");// windows + . = emoji
// } 
//     or*/

// const age = 15;

// if(age>=18){
//     console.log("Maitri can drive🚗");// windows + . = emoji
// } else{
//     const yearsLeft = 18- age;
//     console.log(`maitri can drive after ${yearsLeft} years `);
// }





// //challenge 2
// const massMark = 96;
// const heightMark = 1.86;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!")
// } else {
//     console.log("John's BMI is higher than Mark's!")
// }
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's!`)    







// //Type Conversion and coercion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Sonam'));//NaN means not a number
// console.log(typeof NaN);
// console.log(String(23), 23);
// //type coercion
// console.log('I am' + 23 +'years old');
// console.log('I am' + '23' + 'years old');
// console.log('23' + '10' + 3);
// console.log('23' - '10' - 3);//converted in numbers

// let n = '1' + 1; //11
// n = n -1;
// console.log(n); //10
// console.log(2+3+4+'5'); //9 and 5 gets concadinated








// //Truthy and falsy values
// //falsy values are the values which are not exactly false but will become false if we try to convert them to boolean
// // 5 falsy values: 0, '', undefined, null ,NaN
// //else all are truthy value
// console.log(Boolean(0));
// console.log(Boolean (undefined));

// const money=0;
// if(money){
//     console.log("Don't spend it all");
// }else{
//     console.log("you should get a job");
// }

// let height;
// if (height){
//     console.log("height is defined");
// }else{
//     console.log("height is undefined");
// }







// //Difference between =, ==, ===
// //= is assignment operator
// //== and === are comparison operator where === is strict and == is loose
// //eg. '18' == 18 is true where '18' is string literal and 18 is an integer
// //'18' === 18 is false as both types are unequal ... string couldn't be equal to integer
// const favourite = /*Number*/ (prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 23){
//     console.log('cool! 23 ia an amazing number')
// } else {
//     console.log("number is not 23")
// }








// //Boolean operator
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense  || hasGoodVision);
// console.log(!hasDriversLicense && hasGoodVision);
// if (hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive!');
// } else {
//     console.log("someone else should drive");
// }








// //Coding challenge 3
// const avgDolphin = (96+108+89)/3;
// console.log(avgDolphin);

// const avgKoalas = (88+91+110)/3;
// console.log(avgKoalas);

// if(avgDolphin > avgKoalas){
//     console.log('Dolphin is winner');
// }else if (avgDolphin < avgKoalas){
//     console.log('Koalas is winner');
// } else{
//     console.log('draw');
// }
// const avgDolphin1 = (97+112+101)/3;
// const avgKoalas1 = (109 +95+123)/3;
// if((avgDolphin1 > avgKoalas1) && (avgDolphin1 >= 100)){
//     console.log('Dolphin is winner');
// } else if ((avgDolphin1 < avgKoalas1) && (avgKoalas1 >= 100)){
//     console.log('Koalas is winner');
// } else {
//     console.log('draw');
// }
// const avgKoalas2 = (109+95+106)/3;
// if((avgDolphin1 > avgKoalas2) && (avgDolphin1 >= 100)){
//     console.log('Dolphin is winner');
// } else if ((avgDolphin1 < avgKoalas2) && (avgKoalas2 >= 100)){
//     console.log('Koalas is winner');
// } else if (avgDolphin1 === avgKoalas2 && avgDolphin>= 100 && avgKoalas2 >= 100 ) {
//     console.log('Both wins the trophy');
// } else {
//     console.log('No one wins the trophy ');
// }







// //switch
// const day = 'monday';
// switch(day) {
//     case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
// case 'tuesday':
//     console.log('prepare theory video');
//     break;
//     case 'wednesday'://both will give write code examples
//     case 'thursday':
//         console.log('write code examples');
//     case'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy the weekend');
//         break;
//         default:
//             console.log('not a valid day')
// }









// //ternary
// const age = 23;
// age>=18 ? console.log('I like tea') : console.log('I like chocolate');






// //coding challenge 4
// var bill;
// bill = 275;
// bill = 430;
// const tip = (50 <= bill <= 300) ? bill * (15/100) : bill * (20/100);
// console.log(`the bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);