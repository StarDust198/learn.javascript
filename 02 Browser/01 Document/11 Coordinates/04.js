function positionAt(anchor, position, elem) {
  // ... your code ...
  let {
    top: anchorTop,
    bottom: anchorBottom,
    left: anchorLeft,
    right: anchorRight,
  } = anchor.getBoundingClientRect();
  const { pageXOffset, pageYOffset } = window;
  const { offsetHeight: elemHeight, offsetWidth: elemWidth } = elem;

  anchorTop += pageYOffset;
  anchorBottom += pageYOffset;
  anchorLeft += pageXOffset;
  anchorRight += pageXOffset;

  switch (position) {
    case 'top-out':
      elem.style.top = anchorTop - elemHeight + 'px';
      elem.style.left = anchorLeft + 'px';
      break;
    case 'right-out':
      elem.style.top = anchorTop + 'px';
      elem.style.left = anchorRight + 'px';
      break;
    case 'bottom-out':
      elem.style.top = anchorBottom + 'px';
      elem.style.left = anchorLeft + 'px';
      break;
    case 'top-in':
      elem.style.top = anchorTop + 'px';
      elem.style.left = anchorLeft + 'px';
      break;
    case 'right-in':
      elem.style.top = anchorTop + 'px';
      elem.style.left = anchorRight - elemWidth + 'px';
      break;
    case 'bottom-in':
      elem.style.top = anchorBottom - elemHeight + 'px';
      elem.style.left = anchorLeft + 'px';
      break;
    default:
      break;
  }
}
