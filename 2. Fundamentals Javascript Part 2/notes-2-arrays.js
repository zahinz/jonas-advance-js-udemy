"use strict";

// 1. Arrays data container
/*
const myFamily = [`Zahin`, `Amira`, `Afrah`]
const myFriend = new Array(`Zumar`, `Rafiq`, `Sarah`)

console.log(myFamily)

console.log(myFamily[1]);
console.log(myFriend[myFriend.length - 1])


// ? replacing the element in an array
// ! even the array is constant, array is not a primitive value

console.log(myFriend)
myFriend[2] = `Rahmah` //change Sarah to Rahmah
console.log(myFriend)
myFriend[0] = `Afiq` //change Zumar to Afiq
console.log(myFriend)


// ? Array can be stored inside an array
const zahin = [`Zahin`, `Cyberjaya`, 2021 - 1994, `Software Engineer`, myFriend]
console.log(zahin)


// ? Using array with function
// ! cannot do operation within the array
const year = [2000, 1992, 1980, 1994]
function calcAge(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge(year[2])
console.log(age1) // 2021 - 1980 = 41

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[2]), calcAge(year[3])]
console.log(ages)
*/



/*********************************************/

// 2. Array method

const myFriend = new Array(`Zumar`, `Rafiq`, `Sarah`)
console.log(myFriend)

// ? .push is a method or function, to add new element at the end of array
myFriend.push(`Liya`)
console.log(myFriend)

// ? .unshift is to add new element at the begining of an array
console.log(myFriend)
myFriend.unshift(`Harith`)

// ? .pop remove the last element
myFriend.pop()
console.log(myFriend)

// ? .shift remove the first element
myFriend.shift()
console.log(myFriend)

// ? .indexOf determine the position of an element in an array
console.log(myFriend.indexOf(`Rafiq`)) // outcome as 1
console.log(myFriend.indexOf(`Afiq`), myFriend.indexOf(`Hidayat`)) // no Afiq and Hidayat in the array, the outcome will -1

// ? .includes determine the existence of an element and return as boolean
// ! using strict equality '23' !== 23 
console.log(myFriend.includes(`Rafiq`)) // outcome as true

let friendRequest = `Zumar`
console.log(myFriend.includes(friendRequest)) // using variable in the array method

console.log(myFriend.includes(`Rafizi`)) // outcome as false

// ? Using .includes in the IF ELSE statement
let friendRequest2 = `Rafizi`
if (myFriend.includes(friendRequest2)) {
    console.log(`Hello ${friendRequest2} my friend!`)
}
else {
    console.log(`Hi there! I love to hear your story!`)
}






