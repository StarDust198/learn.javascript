const openModalBtn = document.getElementById('open-modal');

const modal = document.getElementById('prompt-form-container');
const form = document.getElementById('prompt-form');
const message = document.getElementById('prompt-message');
const overlay = document.createElement('div');
overlay.classList.add('overlay');

bindListeners();
modal.remove();

const showPrompt = (html, callback) => {
  message.innerHTML = html;
  document.body.style.overflowY = 'hidden';
  document.body.append(overlay, modal);

  form.onsubmit = (e) => {
    e.preventDefault();
    const savedValue = form.elements.text.value;
    if (savedValue === '') return;
    closeForm(savedValue);
  };
  document.onkeydown = (e) => {
    if (e.key !== 'Escape') return;
    closeForm(null);
  };
  form.elements.cancel.onclick = () => {
    closeForm(null);
  };

  function closeForm(value) {
    document.body.style.overflowY = '';
    document.onkeydown = null;
    form.reset();
    overlay.remove();
    modal.remove();
    callback(value);
  }
};

function bindListeners() {
  modal.addEventListener('click', () => {
    form.elements[0].focus();
  });

  for (let i = 0; i < 3; i++) {
    form.elements[i].addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      e.preventDefault();
      if (e.shiftKey) {
        form.elements[i === 0 ? 2 : i - 1].focus();
      } else {
        form.elements[i === 2 ? 0 : i + 1].focus();
      }
    });
  }
}

openModalBtn.onclick = () => {
  showPrompt('Enter something<br>...smart :)', function (value) {
    alert(value);
  });
};
