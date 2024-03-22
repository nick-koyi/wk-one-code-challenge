// create a variable that ask the user for the speed of the car
let speed = prompt('Please enter the speed of a car');
// converts the speed a floating point
speed = parseFloat(speed);
// create a function to calulate the demerits points
function speedDetector(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  const maxDemeritPoints = 12;

  if (speed <= speedLimit) {
    console.log('Ok');
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > maxDemeritPoints) {
      console.log('License suspended');
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}
// invokes the function
speedDetector(speed);
