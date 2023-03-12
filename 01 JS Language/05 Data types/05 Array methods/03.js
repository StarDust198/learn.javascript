const filterRangeInPlace = (arr, start, end) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= start && arr[i] <= end) continue;
    arr.splice(i, 1);
  }
};
