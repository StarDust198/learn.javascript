const getSecondsToTomorrow = (date) => {
  const tomorrow = new Date(date).setDate(date.getDate() + 1);

  return Math.round(
    (new Date(new Date(tomorrow).toDateString()) - new Date()) / 1000
  );
};
