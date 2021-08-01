// Value and variables

let country = "Malaysia";
let continent = "Asia";
let population = 31950000;

// construct string 1
console.log ("I live in " + country + " located in " + continent + " with population of " + population + " by 2021.");

// construct string 2
console.log (`I live in ${country} located in ${continent} with population of ${population} by 2021.`);


// Data type

let isIsLand = true;
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsLand);


// let, var, const

const language = "Bahasa Malaysia";
console.log(language);

// Uncaught TypeError: Assignment to constant variable.
// language = "English";
// console.log(language);


// Operation

let halfPopulation = population / 2;
//halfPopulation++;
console.log(halfPopulation);

let finlandPopulation = 60000000;
let populationCheck = population > finlandPopulation;
console.log(populationCheck);

let averagePopulation = 33000000;
let differenceAveragePopulation = Math.abs(population - averagePopulation);

if (population > averagePopulation) {
    console.log("Malaysia has " + differenceAveragePopulation + " more than average country population")
}

else {
    console.log("Malaysia has " + differenceAveragePopulation + " less than average country population")
}

let description = country + " is located in " + continent + ", and its " + halfPopulation + " people speaks " + language;
console.log(description);


// Template literal

description = `${country} is located in ${continent}, and its ${halfPopulation} people speaks ${language}.`;
console.log(description); 


// If else statement]

if (population > averagePopulation) {
    console.log(`Malaysia's population is above average`);
}
else {
    console.log(`Malaysia's population is ${Math.abs(population-halfPopulation)} below average.`)
}


// Equality operators

let numNeighbours = Number(prompt(`How many neighbourhood countries does your counrty have?`)); // convert string to number using Number() conversion

if (numNeighbours > 1) {
    console.log(`${country} got ${numNeighbours} neighbourhood countries!`);
}
else if (numNeighbours === 1) {
    console.log(`${country} got only 1 country in your neighbourhood`);
}
else {
    console.log(`${country} got no neighbourhood country :(`)
}
