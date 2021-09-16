/**
 * Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
 * gymnastics discipline, which works differently.
 * Each team competes 3 times, and then the average of the 3 scores is calculated (so
 * one average score per team).
 * A team only wins if it has at least double the average score of the other team.
 * Otherwise, no team wins!
 *
 * Your tasks:
 * 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
 * 2. Use the function to calculate the average for both teams
 * 3. Create a function 'checkWinner' that takes the average score of each team
 * as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
 * to the console, together with the victory points, according to the rule above.
 * Example: "Koalas win (30 vs. 13)"
 * 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
 * Data 2
 * 5. Ignore draws this time
 *
 * Test data:
 * Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
 * Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
 *
 * Hints:
 * To calculate average of 3 values, add them all together and divide by 3
 * To check if number A is at least double number B, check for A >= 2 * B.
 * Apply this to the team's average scores format
 */


// Task 1

const averageMark = (a, b, c) => (a + b + c) / 3;
const dolphinAverageMark = averageMark(85, 54, 41);
const koalaAveraveMark = averageMark(23, 34, 27)

console.log(dolphinAverageMark, koalaAveraveMark)

// Task 2

/*
let teamMark = averageTeamMark(85, 54, 41, 23, 34, 27); // insert data set here

function averageTeamMark(d1, d2, d3, k1, k2, k3) {
    const averageDolphin = averageMark(d1, d2, d3);
    const averageKoala = averageMark(k1, k2, k3);
    const bothMarks = `Dolphin - ${averageDolphin}, Koala - ${averageKoala}`;
    return [bothMarks, averageDolphin, averageKoala];
}

const allMark = teamMark[0];
const dolphinMark = teamMark[1];
const koalaMark = teamMark[2];

console.log(`${allMark} 
${dolphinMark}, ${koalaMark}`);
*/


// Task 3

//const finalResult = checkWinner(44, 23, 71, 65, 54, 49); // insert data here

/*
const finalResult = checkWinner(85, 54, 41, 23, 34, 27); // insert data here

function checkWinner(d1, d2, d3, k1, k2, k3) {
    const averageDolphin = averageMark(d1, d2, d3);
    const averageKoala = averageMark(k1, k2, k3);
    if (averageDolphin >= averageKoala * 2) {
        return `Dolphin is the winner! ${averageDolphin} vs ${averageKoala}.`;
    } else if (averageKoala >= averageDolphin * 2) {
        return `Koala is the winner! ${averagekoala} vs ${averageDolphin}.`;
    } else {
        return `No winner for this game`;
    }
}

console.log(finalResult);
*/

function checkWinner(dolphinMark, koalaMark) {
    if (dolphinMark >= koalaMark * 2) {
        return `Dolphin is the winner! ${dolphinMark} vs ${koalaMark}.`;
    } else if (koalaMark >= dolphinMark * 2) {
        return `Koala is the winner! ${koalaMark} vs ${dolphinMark}.`;
    } else {
        return `No winner for this game`;
    }
}

const finalResult = checkWinner(dolphinAverageMark, koalaAveraveMark)
console.log(finalResult)

// Solution putting variable inside function
// declare all function first then variables
// parameter in the function is independent

