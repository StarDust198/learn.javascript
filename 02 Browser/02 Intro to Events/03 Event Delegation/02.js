tree.querySelectorAll('li').forEach((item) => {
  const span = document.createElement('span');
  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  let tgt = e.target.closest('span');
  if (!tgt) return;

  const list = tgt.parentElement.querySelector('ul');
  if (!list) return;

  list.hidden = !list.hidden;
});
