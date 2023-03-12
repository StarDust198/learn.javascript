ball.style.cssText = `
      position: absolute;
      transition: 0.5s all ease-in-out;
    `;

field.addEventListener('click', ({ clientY, clientX }) => {
  const fieldTop = field.offsetTop + field.clientTop;
  const fieldBottom = fieldTop + field.clientHeight;
  const fieldLeft = field.offsetLeft + field.clientLeft;
  const fieldRight = fieldLeft + +field.clientWidth;

  const { offsetHeight: ballHeight, offsetWidth: ballWidth } = ball;
  const maxTop = fieldTop + ballHeight / 2;
  const maxBottom = fieldBottom - ballHeight / 2;
  const maxLeft = fieldLeft + ballWidth / 2;
  const maxRight = fieldRight - ballWidth / 2;

  const clickY = clientY + window.pageYOffset;
  const clickX = clientX + window.pageXOffset;

  const destinationY =
    clickY > maxBottom ? maxBottom : clickY < maxTop ? maxTop : clickY;
  const destinationX =
    clickX > maxRight ? maxRight : clickX < maxLeft ? maxLeft : clickX;

  ball.style.top = destinationY - ballHeight / 2 + 'px';
  ball.style.left = destinationX - ballWidth / 2 + 'px';
});
