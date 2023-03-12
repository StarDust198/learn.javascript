container.addEventListener('click', (e) => {
  const tgt = e.target;
  if (tgt.classList.contains('remove-button')) {
    tgt.closest('.pane').hidden = true;
  }
});
