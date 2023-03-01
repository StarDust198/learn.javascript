const getSecondsToday = () =>
  Math.round((new Date() - new Date(new Date().toDateString())) / 1000);
