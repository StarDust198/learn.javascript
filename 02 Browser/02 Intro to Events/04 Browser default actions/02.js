contents.addEventListener('click', (e) => {
  const tgt = e.target.closest('a');
  if (!tgt) return;

  const sure = confirm(`Really want to go to ${tgt.textContent}?`);
  if (!sure) e.preventDefault();
});
