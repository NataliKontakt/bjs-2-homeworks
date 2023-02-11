"use strict"

function getArrayParams(...arr) {

    let min = 0;
    let max = 0;
    let sum = 0;
    if (arr.length === 1) {
        min = arr[0];
        max = arr[0];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }

    let avg = (sum / arr.length).toFixed(2);
    avg = +avg;
    return {min:min, max:max, avg:avg};
}

function summElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;

}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let min = Infinity;
    let max = 0;
    if (arr.length === 1) {
        min = arr[0];
        max = arr[0];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    let difference = max - min;
    return difference;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
        } else if (arr[i] % 2 !== 0) {
            sumOddElement += arr[i];
        }
    }
    let differenceEvenOdd = sumEvenElement - sumOddElement;
    return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
        }
    }
    let quotientOfNumbers = sumEvenElement / countEvenElement;
    return quotientOfNumbers;
}
function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
       for (let i = 0; i < arrOfArr.length; i++){
        let a = func(...arrOfArr[i]);
        if (maxWorkerResult < a) {
          maxWorkerResult = a;
        }
      }
      return maxWorkerResult;
}



