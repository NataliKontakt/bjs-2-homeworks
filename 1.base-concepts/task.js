"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = b ** 2 - 4 * a * c;


  if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  } else if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = +percent;
  contribution = +contribution;
  amount = +amount;

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  } 
    percent = percent * 0.01 / 12;
    let loanBody = amount - contribution;
    let monthlyPayment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
    let fullLoanAmount = +((monthlyPayment * countMonths).toFixed(2));
    return fullLoanAmount;
  
}