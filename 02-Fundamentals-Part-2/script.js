'use strict';
//  let hasLicense = false;
//  const passTest = true;
//  if(passTest) 
//     haLicense = true;
//  if(hasLicense)
//     console.log('I can drive');//see by deactivating and activating use strict 






// //function L3
// function logger(){
//     console.log("My name is sonam ");
// }
// //calling, running or invoking function
// logger();
// logger();
// function fruitProcessor(apples, oranges){
//     console.log(apples,oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);// for returning juice we need to store the value in some variable
// console.log(fruitProcessor(5,0));//this will also give same result

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// // function assignment
// function describeCountry(country, population, capitalCity){
//     return `${country} has ${population} people and its capital city is ${capitalCity}`;
// }
// const data1 = describeCountry('India', 30000000, 'NewDelhi');
// const data2 = describeCountry('Canada', 1000000, 'newYork');
// console.log(data1, data2);



// //function declaration // if we use before declaring then declares it still works
// function calcAge1(birthYeah){
//     // const age = 2037 - birthYeah;
//     // return age; OR
//     return 2037 - birthYeah;
// }
// const age1 =calcAge1(1991);

// //function expression//doesn't work before declaring
// const calcAge2 = function (birthYeah){
//     return 2037 - birthYeah;}
//     const age2 = calcAge2(1991);
//     console.log(age1, age2);

//     //assignment
//     //using function declaration
//     function percentageOfWorld1(population){
//         return (population/7900)* 100;
//     }
//     const china = percentageOfWorld1(1441);
//     console.log(china);
//     const India = percentageOfWorld1(1220);
//     console.log(India);
//     //using function expression
// const populationOfWorld2 = function(population){
//     return (population/7900)* 100;
// }
//     const china1 = populationOfWorld2(1441);
//     console.log(china1);
//     const india = populationOfWorld2(1220);
//     console.log(india);





//arrow function 
    const calcAge3 = birthYeah => 2037 - birthYeah;
    const age3 = calcAge3(1991);
    console.log(age3);