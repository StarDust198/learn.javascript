const getMaxSubSum = (arr) => {
  let maxSum = 0,
    tempSum = 0;

  for (let num of arr) {
    // console.log(tempSum, maxSum, num);
    tempSum += num;
    if (tempSum > maxSum) maxSum = tempSum;
    if (tempSum < 0) tempSum = 0;
  }

  return maxSum;
};

console.log(getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([1, 2, 3]) == 6);
