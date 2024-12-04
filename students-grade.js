const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getStudentGrade() {
    // Prompt user for marks
    rl.question("Enter student marks (0 - 100): ", (input) => {
        // Convert input to a number
        let marks = parseFloat(input);

        // Validate input
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
            rl.close(); // Close the readline interface
            return; // Exit function if input is invalid
        }

        // Determine grade
        let grade;
        if (marks > 79) {
            grade = "A";
        } else if (marks >= 60) {
            grade = "B";
        } else if (marks >= 50) {
            grade = "C";
        } else if (marks >= 40) {
            grade = "D";
        } else {
            grade = "E";
        }

        // Output the grade
        console.log(`The student's grade is: ${grade}`);
        rl.close(); // Close the readline interface
    });
}

// Call the function
getStudentGrade();