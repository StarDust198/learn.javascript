const formatDate = (date) => {
  const diff = Date.now() - date;

  if (diff < 1000) {
    return 'right now';
  } else if (diff < 1000 * 60) {
    return `${Math.round(diff / 1000)} sec. ago`;
  } else if (diff < 1000 * 60 * 60) {
    return `${Math.round(diff / 1000 / 60)} min. ago`;
  }
  const getZero = (num) => (num < 10 ? '0' + num : '' + num);

  let year = date.getFullYear() % 100;
  let month = getZero(date.getMonth() + 1);
  let day = getZero(date.getDate());
  let hours = getZero(date.getHours());
  let minutes = getZero(date.getMinutes());

  return `${[day, month, year].join('.')} ${[hours, minutes].join(':')}`;
};
