// ==========================================
// SECTION 1: Adding up an array of numbers
// ==========================================

// Create an array (a list) of expense numbers
let expenses = [2000, 5000, 1500];

// Create a variable to hold our running total, starting at 0
let total = 0;

// A 'for' loop goes through each item in the array one by one.
// - let i = 0: start at index 0 (the first item, 2000)
// - i < expenses.length: keep looping as long as 'i' is less than the total count of items (3)
// - i++: increase 'i' by 1 after each loop
for (let i = 0; i < expenses.length; i++) {
    // Add the current expense to the total
    total = total + expenses[i];
}

// Print the final sum to the console (2000 + 5000 + 1500 = 8500)
console.log(total); 

// Note: i++ is just a shortcut way of writing: i = i + 1
// i++ == i = i+1; (This line in your notes shows they do the same thing)


// ==========================================
// SECTION 2: Printing text
// ==========================================

// Prints a standard greeting message to the console screen
console.log("Hello world!!!!");


// ==========================================
// SECTION 3: Functions and Budget Checking
// ==========================================

// Define a reusable function named 'sumExpenses' that takes any list as an input
function sumExpenses(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total = total + list[i];
  }
  // Send the calculated total back out of the function
  return total;
}

// Set up a budget limit
let budget = 5000;

// Create a new, larger list of expenses
let expensesList = [2500, 5000, 6000, 7000, 8000, 9000, 10000];

// Call our function, passing in the new list, and store the result in 'total'
let calculatedTotal = sumExpenses(expensesList);

// Check if we spent more than our budget using an 'if/else' statement
if (calculatedTotal > budget) {
  // If total is greater than budget, show how much we went over
  console.log("Over budget by", calculatedTotal - budget);
} else {
  // Otherwise, show how much money we have left over
  console.log("Within budget. Left:", budget - calculatedTotal);
}


// ==========================================
// SECTION 4: Averages and Counting Passes
// ==========================================

// A list of student test scores
let scores = [62, 75, 48, 90];

// The passing mark. Note: "50" is written as a string (with quotes), 
// but JavaScript will automatically convert it to a number during the comparison.
let passMark = "50"; 

let scoreTotal = 0;
let numberPassed = 0;

// Loop through the scores to add them all together for the average
for (let i = 0; i < scores.length; i++) {
    scoreTotal = scoreTotal + scores[i];
}

// Calculate the average (total divided by the number of items in the list)
let average = scoreTotal / scores.length;

// Loop through the scores again to count how many students scored higher than the pass mark
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > passMark) {
        // numberPassed++ is a shortcut for: numberPassed = numberPassed + 1
        numberPassed++;
    } 
}

// Print out the final average score and the total number of passing students
console.log(average);
console.log(numberPassed);


// my project 
// myProject
// my-project