mouse.tabIndex = 0;

mouse.addEventListener('keydown', function (e) {
  this.style.position = 'relative';
  let left = this.style.left ? parseInt(this.style.left) : 0;
  let top = this.style.top ? parseInt(this.style.top) : 0;
  let { width, height } = this.getBoundingClientRect();

  switch (e.key) {
    case 'ArrowRight':
      left += width;
      this.style.left = left + 'px';
      break;
    case 'ArrowLeft':
      left -= width;
      this.style.left = left + 'px';
      break;
    case 'ArrowUp':
      top -= height;
      this.style.top = top + 'px';
      break;
    case 'ArrowDown':
      top += height;
      this.style.top = top + 'px';
      break;
    default:
      return;
  }
});
