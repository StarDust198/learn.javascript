function positionAt(anchor, position, elem) {
  // ... your code ...
  let {
    top: anchorTop,
    bottom: anchorBottom,
    left: anchorLeft,
    right: anchorRight,
  } = anchor.getBoundingClientRect();
  const { pageXOffset, pageYOffset } = window;

  anchorTop += pageYOffset;
  anchorBottom += pageYOffset;
  anchorLeft += pageXOffset;
  anchorRight += pageXOffset;

  switch (position) {
    case 'top':
      elem.style.top = anchorTop - elem.offsetHeight + 'px';
      elem.style.left = anchorLeft + 'px';
      break;
    case 'right':
      elem.style.top = anchorTop + 'px';
      elem.style.left = anchorRight + 'px';
      break;
    case 'bottom':
      elem.style.top = anchorBottom + 'px';
      elem.style.left = anchorLeft + 'px';
      break;
    default:
      break;
  }
}
