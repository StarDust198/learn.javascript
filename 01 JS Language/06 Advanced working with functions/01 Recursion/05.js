const printListByLoop = (list) => {
  let arr = [];

  while (list) {
    arr.push(list.value);
    list = list.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

const printList = (list) => {
  if (list.next) printList(list.next);
  console.log(list.value);
};

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printListByLoop(list);
printList(list);
