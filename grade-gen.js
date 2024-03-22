// create a variable that ask the user for students marks
let marks = prompt('Enter student marks (0-100):');
// parses the input recevied to a floating point number
marks = parseFloat(marks);
//determins which grade to assign base on the marks
if (marks >= 0 && marks <= 100) {
  let grade;
  if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60 && marks <= 79) {
    grade = 'B';
  } else if (marks >= 50 && marks <= 59) {
    grade = 'C';
  } else if (marks >= 40 && marks <= 49) {
    grade = 'D';
  } else {
    grade = 'E';
  }
  //prints out the grade to the console
  console.log(`Grade: ${grade}`);
} else {
  // displays an error if the condtion is not met
  console.log('Invalid input. Marks should be between 0 and 100.');
}
