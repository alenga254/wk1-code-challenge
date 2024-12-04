const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkSpeed(speed) {
    // Define the speed limit and points calculation
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    // Validate input
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a valid speed.");
        return; // Exit function if input is invalid
    }

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate the number of demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Prompt user for speed input
rl.question("Enter speed: ", (input) => {
    // Convert input to a number
    const speed = parseFloat(input);
    checkSpeed(speed); // Call the checkSpeed function with the user input
    rl.close(); // Close the readline interface
});