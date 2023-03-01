const formatDate = (date) => {
  const timePassed = new Date() - date;

  if (timePassed < 1000) {
    return 'right now';
  } else if (timePassed < 60 * 1000) {
    return `${Math.floor(timePassed / 1000)} sec. ago`;
  } else if (timePassed < 60 * 1000 * 24) {
    return `${Math.floor(timePassed / (60 * 1000))} min. ago`;
  }

  const getZero = (n) => (n < 10 ? `0${n}` : (n + '').slice(-2));

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${getZero(day)}.${getZero(month + 1)}.${getZero(year)} ${getZero(
    hours
  )}:${getZero(minutes)}`;
};
