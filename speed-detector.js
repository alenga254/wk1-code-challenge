function checkSpeed(speed) {

    // define the speed limit and points calculation
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
       
        // calculate the number of dimerit points
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example usage:
checkSpeed(60); 
// change 60 to any value you want to test