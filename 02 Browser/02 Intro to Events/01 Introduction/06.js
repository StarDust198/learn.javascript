const panes = document.querySelectorAll('.pane');

for (let pane of panes) {
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('remove-button');
  closeBtn.innerHTML = '[x]';
  closeBtn.style.right = '16px';
  closeBtn.style.top = '8px';

  pane.append(closeBtn);
  closeBtn.addEventListener('click', () => pane.remove());
}
