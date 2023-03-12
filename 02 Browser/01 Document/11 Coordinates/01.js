fieldCoords = field.getBoundingClientRect();

const firstCoords = [fieldCoords.left, fieldCoords.top];

const secondCoords = [fieldCoords.right, fieldCoords.bottom];

const thirdCoords = [
  fieldCoords.left + field.clientLeft,
  fieldCoords.top + field.clientTop,
];

const fourthCoords = [
  fieldCoords.left + field.clientLeft + field.clientWidth,
  fieldCoords.top + field.clientTop + field.clientHeight,
];
