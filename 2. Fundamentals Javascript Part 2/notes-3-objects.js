"use strict";

// 1. Introduction to objects
// ? Every objects contains key value pairs
// ? Group different variables all together paired with an object
// ! array for ordered data, object for unordered data

const zahin = {
    firstName: `Zahin`, // firstName is key, `Zahin` is value or properties
    lastName: `Zulkipli`,
    age: 2021 - 1994,
    job: `Software engineer`,
    family: [`Zahin`, `Amira`, `Afrah`],
    friends: new Array(`Zumar`, `Rafiq`, `Sarah`),
}

console.log(zahin);



/*********************************************/

// 2. Retrieve from an object
// ? using dot and bracket notation

console.log(zahin.firstName); // dot (.) real property
console.log(zahin[`firstName`]); // the expression inside the bracket can be computed from other operation. operation === expression

// ! proof for [] expression, to recall the object value
const nameKey = `Name`;
console.log(zahin[`first` + nameKey]);
console.log(zahin[`last` + nameKey]);

var interestedIn = `food` // determine a variable
console.log(zahin[interestedIn]); // using the variable to recall the object's value //! if no value in the object === undefine === FALSE

if (zahin[interestedIn]) {
    console.log(zahin[interestedIn]);
}
else {
    console.log(`No requested value in this object`);
}



/*********************************************/

// 3. Add new property in an object
// ? using dot and bracket notation

zahin.location = `Cyberjaya`
zahin.website = `www.zahinzul.com`
console.log(zahin);

const friendString = `${zahin.firstName} has only ${zahin.friends.length} friends and his bestfriend is ${zahin.friends[1]}.`
console.log(friendString);



/*********************************************/

// 4. Object method
// ? value is the outcome of an expression 

const zahin2 = {
    firstName: `Zahin`, // firstName is key, `Zahin` is value or properties
    lastName: `Zulkipli`,
    birthYear: 1994,
    job: `Software engineer`,
    family: [`Zahin`, `Amira`, `Afrah`],
    friends: new Array(`Zumar`, `Rafiq`, `Sarah`),
    hasDriverLicense: true,
    location: `Cyberjaya`,

    // calcAge: function (birthYear) { // ! must use function expression in an object
    //     return 2021 - birthYear
    // }

    // calcAge: function () {
    //     return 2021 - this.birthYear // ! THIS is used to declare the object where the method is called
    // }

    calcAge: function () {
        this.age = 2021 - this.birthYear // ! declare a new property is an object by using THIS and dot (.) notation
        return this.age // ! return the function as per good practice
    },

    // personSummary: function () {
    //     this.summary
    //     if (this.hasDriverLicense === true) {
    //         this.summary = `${this.firstName} ${this.lastName} is a ${this.age} ${this.job} in ${this.location} and he can go to work using his car.`
    //     }
    //     else {
    //         this.summary = `${this.firstName} ${this.lastName} is a ${this.age} ${this.job} in ${this.location} and he needs public transport to go to work.`
    //     }
    //     return this.summary
    // },

    personSummary: function() {
        this.summary = `${this.firstName} ${this.lastName} is a ${this.age} ${this.job} at ${this.location} and he has ${this.hasDriverLicense ? `a` : `no`} driver license.`
        return this.summary
    }
}

console.log(zahin2);
// console.log(zahin2.calcAge(1994)); // using dot (.)
// console.log(zahin2[`calcAge`](1994)); // using bracket []

console.log('Retrieve by calling a function inside an object ' + zahin2.calcAge());
console.log('By adding new property inside an object ' + zahin2.age);

/*********************************************/

// function goToWork() {
//     let work;
//     if (zahin2.hasDriverLicense === true) {
//         work = `${zahin2.firstName} ${zahin2.lastName} is a ${zahin2.age} ${zahin2.job} in ${zahin2.location} and he can go to work using his car.`
//     }
//     else {
//         work = `${zahin2.firstName} ${zahin2.lastName} is a ${zahin2.age} ${zahin2.job} in ${zahin2.location} and he needs public transport to go to work.`
//     }
//     return work
// }

function goToWork() {
    return `${zahin2.firstName} ${zahin2.lastName} is a ${zahin2.age} ${zahin2.job} at ${zahin2.location} and he has ${zahin2.hasDriverLicense ? `a` : `no`} driver license.`
}

const summaryZahin1 = goToWork()

// console.log(summaryZahin1)

/*********************************************/

// console.log(zahin2.personSummary());
console.log(zahin2.summary);
