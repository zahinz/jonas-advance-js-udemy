// Coding Challenge #4

// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!


// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 



// 😉 Bonus:

// 4. Bonus: 
//Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:

// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together

// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)

// 4.3. Call the function with the 'totals' array

// GOOD LUCK 😀

// const bill = [10, 31, 54, 75, 69, 23, 18, 93, 107, 25];
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [];
const totals = [];

function calcTip(bill) {
    let myTip
    if (bill >= 50 && bill <= 300) {
        myTip = bill * 0.15
    }
    else {
        myTip = bill * 0.2
    }
    return myTip
}

for (let i = 0; i < bill.length; i++) {
    // console.log(i);
    tips.push(calcTip(bill[i]));
    totals.push(tips[i]+bill[i]);
    console.log(`${bill[i]} + ${tips[i]} = ${totals[i]}`);
}
console.log(` `);
console.log(bill);
console.log(tips);
console.log(totals);
console.log(` `);
console.log(` `);

// const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// // const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const aver =[];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum = (arr[i]+sum)
//     console.log(`${(sum-arr[i])} + ${arr[i]} = ${sum}`);
//     aver.push(sum/(i+1))
// }
// console.log(` `);
// console.log(sum);
// console.log(aver);
console.log(` `);
console.log(` `);

function calcAverage(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(calcAverage(bill), calcAverage(tips), calcAverage(totals));