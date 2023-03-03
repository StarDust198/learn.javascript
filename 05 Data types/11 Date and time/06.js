const getSecondsToday = () =>
  Math.round((Date.now() - new Date(new Date().toDateString())) / 1000);
