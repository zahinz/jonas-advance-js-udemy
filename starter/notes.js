// 1. Data types

// ?Value --> object or primitive
// *Primitive --> Number, String (double or single quote), Boolean (true, false), Undefined (empty value), Null (empty value), Symbol, BigInt (Langer interger than the Number can hold)
// *Dynamic typing --> data types are determined automatically in a variable
// ?operator typeof.

var javascriptIsFun = true;

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Zahin");
console.log(typeof javascriptIsFun);


javascriptIsFun = "Yes!"; //example of dynamic typing, change of data value

console.log(typeof javascriptIsFun);


let month;
console.log(month); //example of undefined
console.log(typeof month);

month = 1994;
console.log(month);
console.log(typeof month);

console.log(typeof null); //console will return as Object, this is a bug that not corrected in a legacy


/***********************************************************/

// 2. let, const, var
// ?let
// *declare variable that can change later. Reassigning value or mutate the variable.
// *block scope

// ?const
// *deckare a variable that canstant. Immutable variable.
// *example - birthYear
// *cannot let empty.
// *best practice to reduce variables mutation.

// ?var
// *legacy javascript
// *Similar as 'let'
// *function scope


let age = 28;
console.log(age);

age = 31;
console.log(age);

const birthYear = 1994

myName = "Rafiq"; //variable can even declared without let or var, but not the best practice
console.log(myName);


/***********************************************************/

// 3. Operators
//*?transform value or combine multiple value
// *mathematical, logical, comparison, assignment, typeof
 
// ?mathematical
// *

//mathematical
const now = 2021
const ageZahin = now-1994;
const ageAmira = now-1993;
console.log(ageZahin, ageAmira);
console.log(ageZahin * 2, ageZahin / 3, ageZahin ** 2); // This means ** power of, ageZahin power of 2.

const firstName2 = "Zahin"; //firstName already declare in script.js
const lastName = "Zulkipli";
console.log(firstName2 + " " + lastName)


//assigment
let x = 10 ** 2; // 100
console.log(x);
x += 10; // x = x + 10
console.log(x);
x *= 4; // x = x * 4
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


//comparison
console.log(ageZahin > ageAmira); // console will produce a boolean true or false
console.log(ageZahin === ageAmira);
console.log(ageZahin !== ageAmira);

const ageCompareZahinAmira = ageZahin < ageAmira;


//precedence 
console.log(now - 1994 > now - 1995); // + is located at precedece 14 and > at precedence 12, higher the precedence is going to execute first. refer MDN 'operator precedence'


let y, z;
x = y = 10 + 10; 
// + is execute left to right, while = right to left
// x + y = 20
// y = 20
// x = y
// x = 20
console.log(x, y);

const averageAge = (ageZahin + ageAmira) / 2;
console.log(ageZahin, ageAmira, averageAge);


/***********************************************************/

// 4. Strings and template literals

let firstName3 = "Zahin"; //firstName1, firstName2 already declared
let job = "sofware engineer"; 
let birthYear2 = 1994; //birthYear already declared

let zahin2 = "I'm " + firstName3 + ", a " + (now - birthYear2) + " working as " + job +"!";
let zahin2New = `I'm ${firstName3}, a ${(now - birthYear2)} years old Malaysians, working as ${job}!`; //template literal by using backticks

console.log(zahin2);
console.log(zahin2New);


console.log("String with \n\
multiple \n\
lines") // old way of creating multiple lines

console.log(`String with 
multiple 
lines`); // with template literal no need \n\ to break a line


/***********************************************************/

// 5. Making decision in Javascript with using IF ELSE statement

let age2 = 17;
//let isOldEnough = age2 >= 18; //boolean property

if (age2 >= 18) {
    console.log(`Afrah can start driving 🚗 on the road`);
}
else {
    console.log(`Afrah cannot 🙅‍♂️ start driving on the road`);
    let yearsLeft = 18 - age2;
    console.log(`You can start driving in ${yearsLeft} years from now.`)
}

//? IF ELSE controlled structure
/*if(){

} 
else {

}
*/

let birthYear3 = 2021;

let century; // declare the varible before start if esle code block
if (birthYear3 <= 2000) {
    century = 20; // variable that declared inside a code block will not be accessible outside the code block. Code block is determine using curly braces {}
}
else {
    century = 21;
}
console.log(`My birth date is in ${century} century.`)


/***********************************************************/

// 6. Type conversion & coercion
//? Conversion
//* Manually convert from one type to other 

let inputYear ='1994';
console.log(Number(inputYear)); // converted into number without changing the original form

console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Zahin')) // console will logged NaN - not a number. An invalid number
console.log(typeof NaN);

console.log(String(23), 23);


//? Coercion
//* Javascript automatically convert behind the scene

console.log('I am ' + 23 + ' years old.'); // + operator triggers the type coercion to convert 23 to string
console.log('10' - '23' - 8); // - operator triggeres the type coercion corvert string into number
console.log("10" * "18"); // the * operator triggeres the type coercion corvert string into number
console.log("30" > 20); // > operator triggeres the type coercion corvert string into number


/***********************************************************/

// 7. Truthy and Falsy Value
// ? 5 falsy value: 0, '', undefined, null, NaN
// * falsy value - will convert into false if we attempt to convert into boolean
// ! in real life practice is implicit

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Zahin")); // true
console.log(Boolean({})); // true

let money = 0; // this going to convert into boolean - false
if (money) {
    console.log(`Don't spend it all.`)
}
else {
    console.log(`You should get a job!`)
}

let height2; // no variable is assigned. this going to convert into boolean - false
if (money) {
    console.log(`height is defined`);
}
else {
    console.log(`height is UNDEFINED`);
}


/***********************************************************/

// 8. Equality operators
// ? === strict equality  

let age3 = 18;
if (age3 === 18) console.log(`You just became an adult!`)

else if (age3 >= 18) console.log(`You are an adult.`)

else {
    if ((Math.abs(18-age3))>1) {
        console.log(`Be patient, you need ${Math.abs(18-age3)} years to become adult.`)
    }
    else {
        console.log(`You going to be adult next year!`)
    }
}


// ? == loose equality, type of coercion "18"==18
// * 18 number == "18" string
// * less usage in real practice, more prone tp bugs
// * always default using strict equality

let age4 = 18;
if (age4 === 18) console.log(`strict equality`); // true
if (age4 == 18) console.log(`loose equality`); // true

age4 = "18";
if (age4 === 18) console.log(`strict equality`); // false
if (age4 == 18) console.log(`loose equality`); // true


let favNumber = Number(prompt(`What is your favourite number?`));
if (favNumber === 18) console.log(`Wow! 18 is an awesome choice!`)
else console.log(`Oh no, try again with number 18.`)


/***********************************************************/

// 9. Boolean logic
// ? AND operator &&
// ? OR operator ||
// ? NOT operator !

let hasDriverLicense = true 
let hasGoodVision = true
let isTired = true // in order for Sarah can drive she should not be tired, use NOT operator in this case

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!isTired); // inverse boolean by using ! as NOT aperator

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`Sarah can driver on her own`);
}
else {
    console.log(`Someone should drive for Sarah`);
}


/***********************************************************/

// 9. The switch statement
// ? it only execute strict equality operator ===
// ! switch, case, break, default
// * more readable and less popular compare to if else in real practice 

let day = `Sunday`

switch(day) {
    case `Monday`: // day === Monday
        console.log(`Do 1 week planning.`);
        console.log(`Weekly meeting updates`);
        break;
    case `Tuesday`:
        console.log(`Design updated wireframe UI for website`);
        break;
    case `Wednesday`:
        console.log(`Present UI design to team members`);
        break;
    case `Thursday`:
        console.log(`Build real prototype using Figma`);
        break;
    case `Friday`:
        console.log(`End of week wrap up meeting`);
        break;
    case `Saturday`:
    case `Sunday`: // stacking case on top of case will execute the logic of the last case Saturday === Sunday
        console.log(`Family time & learn new skills`);
        break;
    default: // Similar as else statement
        console.log(`Not a valid day.`)
}


/***********************************************************/

// 10. Statement and expression
// ? expression - line of code which produce a value : Number, Boolean, fetching from variable, operator
// ? statement - line of code which produce action but not a value : IF ELSE, SWITCH, declare a variable
// ! Template literal only can use expression in ${}


/***********************************************************/

// 11. Conditional / tenary operator
// ? it an expression, thus can put in template literal
// * by using ? as IF and : as ELSE
// ! no ELSE IF statement

let age5 = 20;
let maturity = age5 >= 18 ? `I am an adult 🍷` : `I am not an adult 🧸`; 
// the ? similar as IF, : similar to ELSE
// ! encounter a problem when to produce ELSE IF statement and it will change the value of a variable 
console.log(age5);
console.log(maturity);



let drink = age5 >= 18 ? `I can drink wine 🍷` : `I am not permitted to drink wine yet 🍉`;
console.log(drink);
console.log(age5);

// conditional / tenary operator above is similar with IF ELSE statement below

let drink2;
if(age5 >= 18) {
    drink2 = `I can drink wine 🍷`
}
else {
    drink2 = `I am not permitted to drink wine yet 🍉`
}
console.log(drink2);


// case example of using tenary operator with template literal
console.log(`I am ${age5} years old and ${age5 >= 18 ? `I can drink wine 🍷` : `I am not permitted to drink wine yet 🍉`}}`)


// personal example to put a name in an alert and replace name with 'stranger' if the prompt is not filled
let yourName = prompt(`Fill in your name here`);
let greetings = `Hello ${yourName ? yourName : `stranger`}!` // tenery operator will replace unfilled string with 'stranger'
let greetings2 = `Hello ${yourName}!` // without tenery operator
console.log(greetings); 
console.log(greetings2);
console.log(typeof yourName) // expected to be string even is unfilled


/***********************************************************/

// 12. Version of Javascript