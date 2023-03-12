let table = document.getElementById('bagua-table');

/* your code */
let editState = false;

const textArea = document.createElement('textArea');
textArea.classList.add('text-area');

const newButton = (text) => {
  const result = document.createElement('button');
  result.textContent = text;
  return result;
};

const buttonBlock = document.createElement('div');
buttonBlock.classList.add('button-block');
const buttonOk = newButton('OK');
const buttonCancel = newButton('CANCEL');
buttonBlock.append(buttonOk, buttonCancel);

table.addEventListener('click', (e) => {
  let targetButton = e.target.closest('button');
  let targetTd = e.target.closest('td');

  if (editState) {
    if (!targetButton || !targetTd) return;

    editState = false;
    if (targetButton.textContent === 'OK') {
      targetTd.innerHTML = textArea.value;
    }
    targetTd.classList.remove('td-edit');
  } else {
    if (!targetTd) return;

    editState = true;
    targetTd.classList.add('td-edit');
    textArea.value = targetTd.innerHTML;

    const { height, width } = targetTd.getBoundingClientRect();
    textArea.style.height = height + 'px';
    textArea.style.width = width + 'px';

    targetTd.innerHTML = '';
    targetTd.append(textArea, buttonBlock);
    textArea.focus();
  }
});
