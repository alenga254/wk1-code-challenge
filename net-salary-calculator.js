// Function to calculate PAYE (Tax)
function calculatePAYE(grossSalary) {
    let tax;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1; // 10% for income up to 24,000
    } else if (grossSalary <= 32333) {
        tax = (24000 * 0.1) + ((grossSalary - 24000) * 0.25); // 25% for income between 24,001 and 32,333
    } else {
        tax = (24000 * 0.1) + (8333 * 0.25) + ((grossSalary - 32333) * 0.3); // 30% for income above 32,333
    }
    return tax;
}

// Function to calculate NHIF deduction
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700; // For gross salary above 100,000
}

// Function to calculate NSSF deduction
function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 2160); // 6% capped at 2160
}

// Main function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Calculate deductions
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const totalDeductions = paye + nhif + nssf;
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary,
    };
}

// Example usage
const basicSalary = 50000; // Replace with user input
const benefits = 10000; // Replace with user input

const result = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary: ", result.grossSalary);
console.log("PAYE (Tax): ", result.paye);
console.log("NHIF Deduction: ", result.nhif);
console.log("NSSF Deduction: ", result.nssf);
console.log("Net Salary: ", result.netSalary);

