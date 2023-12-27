"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-(4*a*c);
  if (d < 0) {
    return arr;
  } 
  else if (d == 0) {
    arr[0] = -b/(2*a);
  } 
  else if (d > 0){
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  }
  return arr; 

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }

  let perc = percent / 100 / 12;
  let bodyCredit = amount - contribution;
  let payment = bodyCredit * (perc + (perc / (((1 + perc)**countMonths) - 1)));
  let sum = payment * countMonths;
  sum = Number(sum.toFixed(2));
  return sum;
}