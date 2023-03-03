const getDateAgo = (date, days) =>
  new Date(new Date(date).setDate(date.getDate() - days)).getDate();

const getDateAgo2 = (date, days) =>
  new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - days
  ).getDate();
