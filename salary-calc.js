const basicPay = parseFloat(prompt('What is your basic pay?'));
const benefits = parseFloat(
  prompt('What are your total benefits (house, car allowance et.c?')
);
const personalRelief = 2400;
let grossPay;
let netPay;
let kra;
let totalDeductions;

function calculateNetSalary(basicPay, benefits) {
  grossPay = basicPay + benefits;
  //nhiF, calculate nhif rates
  let nhif;
  if (grossPay >= 0 && grossPay <= 5999) {
    nhif = 150;
  } else if (grossPay > 5999 && grossPay <= 7999) {
    nhif = 300;
  } else if (grossPay > 7999 && grossPay <= 11999) {
    nhif = 400;
  } else if (grossPay > 11999 && grossPay <= 14999) {
    nhif = 500;
  } else if (grossPay > 14999 && grossPay <= 19999) {
    nhif = 600;
  } else if (grossPay > 19999 && grossPay <= 24999) {
    nhif = 750;
  } else if (grossPay > 24999 && grossPay <= 29999) {
    nhif = 850;
  } else if (grossPay > 29999 && grossPay <= 34999) {
    nhif = 900;
  } else if (grossPay > 34999 && grossPay <= 39999) {
    nhif = 950;
  } else if (grossPay > 39999 && grossPay <= 44999) {
    nhif = 1000;
  } else if (grossPay > 44999 && grossPay <= 49999) {
    nhif = 1100;
  } else if (grossPay > 49999 && grossPay <= 59999) {
    nhif = 1200;
  } else if (grossPay > 59999 && grossPay <= 69999) {
    nhif = 1300;
  } else if (grossPay > 69999 && grossPay <= 79999) {
    nhif = 1400;
  } else if (grossPay > 79999 && grossPay <= 89999) {
    nhif = 1500;
  } else if (grossPay > 89999 && grossPay <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }

  // tax
  let tax;
  if (grossPay > 0 && grossPay <= 24000) {
    tax = grossPay * 0.1;
  } else if (grossPay > 24000 && grossPay <= 32333) {
    tax = grossPay * 0.25;
  } else if (grossPay > 32333 && grossPay <= 500000) {
    tax = grossPay * 0.3;
  } else if (grossPay > 500000 && grossPay <= 800000) {
    tax = grossPay * 0.325;
  } else {
    tax = grossPay * 0.35;
  }

  // nssf
  let nssf;
  if (grossPay > 0 && grossPay <= 18000) {
    nssf = 360;
  } else {
    nssf = 1080;
  }
  //PAYE
  kra = tax - personalRelief;

  //net pay
  netPay = grossPay - (kra + nssf + nhif);
  return netPay;
}

console.log(` Your net salary is: ${calculateNetSalary(basicPay, benefits)}`);
