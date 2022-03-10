// Demerit Points


// Speed limit = 70
// 1 point for every 5 miles over the speed limit
// If they get more than 12 points then they get thier license suspended

checkSpeed(50)

function checkSpeed(speed) {
    const speedLimit = 70;
    const mphPerPoint = 5;

    if (speed < speedLimit) {
        console.log('Ok');
        return;
    }
    
    const points = Math.floor((speed - speedLimit) / mphPerPoint);
    if (points >= 12)
        console.log('License Suspended');
    else  
        console.log('Points', points);
}