// Create a guessing game where a user will enter a maximum number. Then the user will try and guess what random number is being generated between 1 and their set maximum number.

// First ask the user to input a maximum number

let maximum = parseInt(prompt("Enter the maximum number"));

//to ensure they enter a valid number and not a NaN, you can use a while loop to ensure a truthy value is being input and not a NaN

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"))
}


const targetNumber = Math.floor(Math.random() * maximum + 1);

let guess = parseInt(prompt("Enter your first guess"));
// track the number of attempts at guessing the correct number, by creating a variable
let attempts = 1;

//Create a while loop to check if the number entered in guess is NOT the same number as the targetNumber

while (parseInt(guess) !== targetNumber) {
  //Give user the option to quit (to get out of the loop)
  if (guess === 'q') break;
  //if you make it into this loop, your first attempt was wrong, and attempts will continue to increase until you get the correct answer
  attempts++;
  if (guess > targetNumber) {
    guess = prompt("Too high! Enter a new guess (or enter q to quit):");
  } else {
    guess = prompt("Too low! Enter a new guess (or enter q to quit):");
  }
}

// if the if statement below runs, its because the targetNumber and the guess were equal or the user quits. Otherwise the while loop will continue to run until it can break from the loop

if (guess ==='q') {
  console.log("You quit.")
} else {
console.log (`You got it! It took you ${attempts} attempts.`)
}