const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  const descendants = item.querySelectorAll('li').length;
  if (descendants) item.childNodes[0].textContent += ` [${descendants}]`;
});
