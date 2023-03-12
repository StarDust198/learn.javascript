function calcScroll() {
  const div = document.createElement('div');
  div.style.overflowY = 'scroll';

  document.body.append(div);
  const result = div.offsetWidth - div.clientWidth;
  div.remove();

  return result;
}
