"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant;
  a = +a;
  b = +b;
  c = +c;

  discriminant = b ** 2 - 4 * a * c;


  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr = [1];
    arr[0] = -b / (2 * a);
  } else {
    arr = [2];

    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = +percent;
  contribution = +contribution;
  amount = +amount;

  if (isNaN(percent)) {
    return false;
  } else if (isNaN(contribution)) {
    return false;
  } else if (isNaN(amount)) {
    return false;
  } else if (isNaN(countMonths)) {
    return false;
  } else {

    percent = percent * 0.01 / 12;
    let loanBody = amount - contribution;
    let monthlyPayment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
    let fullLoanAmount = +((monthlyPayment * countMonths).toFixed(2));
    console.log(percent);
    console.log(monthlyPayment);
    console.log(fullLoanAmount);
    return fullLoanAmount;
  }

}