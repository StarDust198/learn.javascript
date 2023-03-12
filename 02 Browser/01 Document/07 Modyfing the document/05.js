function createTree(container, data) {
  /* your code */
  const entries = Object.entries(data);
  if (!entries.length) return;

  const ul = document.createElement('ul');

  for (let entry of entries) {
    const li = document.createElement('li');
    li.textContent = entry[0];
    createTree(li, entry[1]);
    ul.append(li);
  }

  container.append(ul);
}

function createTree2(container, data) {
  /* your code */
  const entries = Object.entries(data);
  if (!entries.length) return;

  let ul = document.createElement('ul');

  for (let entry of entries) {
    const li = document.createElement('li');
    li.innerHTML += entry[0];
    createTree(li, entry[1]);
    ul.innerHTML += li.outerHTML;
  }

  container.innerHTML += ul.outerHTML;
}
