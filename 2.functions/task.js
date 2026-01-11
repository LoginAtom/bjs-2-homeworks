function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }
  let minN = Infinity;
  let maxN = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= maxN) {
      maxN = arr[i];
    }
    if (arr[i] <= minN) {
      minN = arr[i];
    }
    sum += arr[i];
  }
  const avg = parseFloat((sum / arr.length).toFixed(2));
  return {
    min: minN,
    max: maxN,
    avg: avg
  };
}

function summElementsWorker(...arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const maxx = Math.max(...arr);
  const minn = Math.min(...arr);
  return maxx - minn;
}

function differenceEvenOddWorker(...arr) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  let sumEven = 0;
  let count = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
      count++;
    }
  }
  if (count === 0) return 0;
  return +(sumEven / count).toFixed(2);
}

function makeWork(arrOfArr, func) {
  let maxResult = -Infinity;
  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxResult) {
      maxResult = result;
    }
  }
  return maxResult;
}

const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker)); // 328
console.log(makeWork(arr, differenceMaxMinWorker)); // 86
console.log(makeWork(arr, differenceEvenOddWorker)); // 92
console.log(makeWork(arr, averageEvenElementsWorker)); // 72