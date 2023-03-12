document.querySelectorAll('[data-tooltip]').forEach((elem) => {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerHTML = elem.dataset.tooltip;
  tooltip.hidden = true;
  elem.append(tooltip);
});

document.addEventListener('mouseover', (e) => {
  const tgt = e.target;
  if (!tgt.dataset.tooltip) return;

  const buttonCoords = tgt.getBoundingClientRect();
  const tooltip = tgt.lastElementChild;
  tooltip.hidden = false;
  const { offsetHeight: tooltipHeight, offsetWidth: tooltipWidth } = tooltip;

  let top = buttonCoords.y - tooltipHeight - 5;
  if (top < 0) {
    top = buttonCoords.y + buttonCoords.height + 5;
  }

  let left = buttonCoords.x + (tgt.offsetWidth - tooltipWidth) / 2;
  if (left < 0) {
    left = 0;
  }

  tooltip.style.top = top + 'px';
  tooltip.style.left = left + 'px';
});

document.addEventListener('mouseout', (e) => {
  const tgt = e.target;
  if (!tgt.dataset.tooltip) return;

  const tooltip = tgt.lastElementChild;
  tooltip.hidden = true;
});
