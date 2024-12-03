function getStudentGrade() {
    // Prompt user for marks
    let marks = prompt("Enter student marks (0 - 100):");

    // Convert input to a number
    marks = Number(marks);

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
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
}

// Call the function
getStudentGrade();
