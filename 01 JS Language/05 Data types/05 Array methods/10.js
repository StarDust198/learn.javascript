const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const randIndex = Math.floor(Math.random() * arr.length);
    [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
  }
};
