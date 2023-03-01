const getDateAgo = (date, days) =>
  new Date(new Date(date).setDate(date.getDate() - days)).getDate();
