let arr = ['a', 'b'];

arr.push(function () {
  alert(this);
});

arr[2](); // ?

// Результат - сам массив, т.к. контекст метода массива это сам масив
