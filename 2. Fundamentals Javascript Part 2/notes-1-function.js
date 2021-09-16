// 1. How to use strict mode
// ? Make easier to detect an undetectable bug in the first place
// * put the 'use strict'; string in the first line of javascript code file

"use strict";

// ! let hasDriverLicense = false;
// ! const passTest = true;

// ! if (passTest) hasDriverLicense = true;
// ! if (hasDriverLicense) console.log(`I can drive!`)

// ! const interface = `Audio`; // strict mode caught reserved word for future usage - interface
// ! const private = `Password`; // private is a reserved word

/*********************************************/

// 2. Function
// ? Line of code which execute orders

function logger() {
  console.log(`Zahin`);
}
//calling, running, invoking a function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges}.`;
  return juice;
}
//calling function
fruitProcessor(1, 2); // the value in the function we call as ARGUMENT
// ! console.log(juice);
// ? we can't recall a constant within the function scope

//define the return of a function with variable
const appleJuice = fruitProcessor(2, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 4);
console.log(appleOrangeJuice);

/*********************************************/

// 3. Function declaration vs expression
// ? The function below is declaration function
// ! can recall before they are defined in the code - hoisting

function calcAge1(birthYear) {
  // const age = 2021 - birthYear
  // return age
  return 2021 - birthYear;
}
const age1 = calcAge1(1994);
console.log(`declaration function ${age1}`);

// ? Expression function - produce value and can store it in variable
// ! need to define first before can call the function

const calcAge2 = function (birthYear) {
  // no function name define after word function
  return 2021 - birthYear;
};
const age2 = calcAge2(1994);
console.log(`expression function ${age2}`);

/*********************************************/

// 4. Arrow function

// ? function expression

const calcAge3 = function (birthYear) {
  return 2021 - birthYear;
};
const age3 = calcAge3(1994);
console.log(`expression function ${age3}`);

// ? arrow function
// ! single line, no curly braces, no return, single parameter
const calcAge4 = (birthYear) => 2021 - birthYear; // no need return after arrow for single line code
const age4 = calcAge4(1994);
console.log(`arrow function ${age4}`);

// ? arrow function with multiple parameters and multiple line
// ! need to declare return, need curly braces {}, need bracket to dclare multiple parameters ()

const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} will retire in ${retirement} years from this year`; // need RETURN at the end of function as usual in multiple lines of code
};
const zahinRetire = yearsUntillRetirement(1994, "Zahin"); // need '' for string
console.log(
  `arrow function with multiple parameters and multiple line - ${zahinRetire}`
);

/*********************************************/

// 5. Calling function inside a function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples); // recall a function inside a function
  const orangePieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces}.`;
  return juice;
}

const myJuice = fruitProcessor2(4, 2);
console.log(`Recalling a function within a function - ${myJuice}`);

/*********************************************/

// 5. Review function

function calcAge5(birthYear, thisYear) {
  return thisYear - birthYear;
}

const yearsUntillRetirement2 = function (thisYear, birthYear, firstName) {
  const age = calcAge5(birthYear, thisYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} will retire in ${retirement} years from this year`;
  } else if (retirement === 0) {
    return `${firstName} is retiring this year.`;
  } else {
    return `${firstName} already retired for the past ${Math.abs(
      retirement
    )} years`;
  }
};
const zahinRetire2 = yearsUntillRetirement2(2059, 1994, "Zahin"); // need '' for string
console.log(`Recalling a function within a function - ${zahinRetire2}`);
