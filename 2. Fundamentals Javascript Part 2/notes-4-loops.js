"use strict";

function break2Lines() {
    console.log(``); console.log(``);
}

/*

console.log(`Let's lift some weight 🏋🏻‍♂️ 1`)
console.log(`Let's lift some weight 🏋🏻‍♂️ 2`)
console.log(`Let's lift some weight 🏋🏻‍♂️ 3`)
console.log(`Let's lift some weight 🏋🏻‍♂️ 4`)
console.log(`Let's lift some weight 🏋🏻‍♂️ 5`)
console.log(`Let's lift some weight 🏋🏻‍♂️ 6`)
console.log(`Let's lift some weight 🏋🏻‍♂️ 7`)
console.log(`Let's lift some weight 🏋🏻‍♂️ 8`)
console.log(`Let's lift some weight 🏋🏻‍♂️ 9`)
console.log(`Let's lift some weight 🏋🏻‍♂️ 10`)

? FOR LOOP will keep executing while the condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Let's lift some weight 🏋🏻‍♂️ ${rep}`)
}


const zahinArray = [
    "Zahin",
    "Zulkipli",
    2021-1994,
    "software developer",
    ["Zumar", "Rahmah", "Nadhirah"],
    "Amira",
    true
]

const types = []

for (let i=0 ; i<zahinArray.length; i++) {
    
    // ! calling the objects inside the zahinArray
    console.log (zahinArray[i]);

    // ! filling the typeof object inside types array
    // method 1
    // types[i] = typeof zahinArray[i]

    // method 2
    types.push(typeof zahinArray[i])

}
console.log(types)


const birthYear = [1996, 1982, 1998, 1990, 2002];
const thisYear = 2021;
const age = [];

for (let i=0 ; i<birthYear.length; i++) {
    age.push(thisYear - birthYear[i])
}

console.log(age)


// ? CONTINUE AND BREAK STATEMENT

break2Lines();
console.log(`--- ALL OBJECT ---`);
for (let i=0 ; i<zahinArray.length; i++) {
    console.log (zahinArray[i], typeof zahinArray[i]);
}


// * CONTINUE
// if (some condition need to BLOCK) continue;
break2Lines();

console.log(`--- STRING ONLY ---`);
for (let i=0 ; i<zahinArray.length; i++) {
    if (typeof zahinArray[i] !== "string") continue;
    console.log (zahinArray[i], typeof zahinArray[i]);
}

// * BREAK
// if (some condition need to STOP THE LOOP) break;
break2Lines();

console.log(`--- BREAK WHEN MEETS NUMBER ---`);
for (let i=0 ; i<zahinArray.length; i++) {
    if (typeof zahinArray[i] === "number") break;
    console.log (zahinArray[i], typeof zahinArray[i]);
}



// ? Reverse an array using loop

const zahinArray = [
    "Zahin",
    "Zulkipli",
    2021-1994,
    "software developer",
    ["Zumar", "Rahmah", "Nadhirah"],
    "Amira",
]

const zahinReverseArray = [];

for (let i = zahinArray.length-1; i >= 0; i--) {
    // console.log(i);
    // console.log(zahinArray[i]);
    zahinReverseArray.push(zahinArray[i])
    console.log(zahinArray[i])
    //zahinArray.push(zahinArray[i]) // !this will create a refelection array
}
break2Lines();

console.log(zahinReverseArray);
//console.log(zahinArray); //! result of reflection array

break2Lines();
*/

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Let's lift some weight 🏋🏻‍♂️ ${rep}`)
}

break2Lines()

let exer = 1
while (exer <= 10) {
    console.log(`- Let's lift some weight 🏋🏻‍♂️ ${exer}`);
    exer ++;
}

