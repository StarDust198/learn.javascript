let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
// Error x used before declaration
