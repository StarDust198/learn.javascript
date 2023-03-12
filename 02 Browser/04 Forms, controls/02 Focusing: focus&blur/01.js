const textArea = document.createElement('textArea');
textArea.classList.add('edit');
document.body.append(textArea);
textArea.style.display = 'none';

const showTextArea = () => {
  textArea.value = view.innerHTML;
  textArea.style.display = '';
  view.style.display = 'none';
  textArea.focus();
};

const showView = () => {
  view.innerHTML = textArea.value;
  textArea.style.display = 'none';
  view.style.display = '';
};

view.addEventListener('click', showTextArea);

textArea.addEventListener('blur', showView);

textArea.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  e.preventDefault;
  showView();
});
