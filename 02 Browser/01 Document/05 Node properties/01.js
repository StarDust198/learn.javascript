const allItems = document.querySelectorAll('li');
allItems.forEach((item) => {
  alert(item.firstChild.data, item.querySelectorAll('li').length);
});
