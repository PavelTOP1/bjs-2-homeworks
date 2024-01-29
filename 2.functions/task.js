'use strict'
// Задание 1
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  const avg = sum / arr.length;

  const roundedAvg = +avg.toFixed(2);

  return { min, max, avg: roundedAvg };
}

// Задание 2
function summElementsWorker(...elements) {
  if (elements.length === 0) {
    return 0;
  }
  
  return elements.reduce((acc, cur) => acc + cur, 0);
}

function differenceMaxMinWorker(...elements) {
  if (elements.length === 0) {
    return 0;
  }
  
  const max = Math.max(...elements);
  const min = Math.min(...elements);
  
  return max - min;
}

function differenceEvenOddWorker(...elements) {
  let sumEven = 0;
  let sumOdd = 0;
  
  for (let element of elements) {
    if (element % 2 === 0) {
      sumEven += element;
    } else {
      sumOdd += element;
    }
  }

  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...elements) {
  let sumEven = 0;
  let countEven = 0;
  
  for (let element of elements) {
    if (element % 2 === 0) {
      sumEven += element;
      countEven++;
    }
  }
  
  if (countEven === 0) {
    return 0;
  }
  
  return sumEven / countEven;
}

// Задание 3
function makeWork(arrofarr, func) {
  let maxworkerresult = -Infinity; 
  
  for(let i = 0; i < arrofarr.length; i++) { 
    const result = func(...arrofarr[i]); 

    if(result > maxworkerresult) { 
      maxworkerresult = result; 
    }
  }
  
  return maxworkerresult; 
}
