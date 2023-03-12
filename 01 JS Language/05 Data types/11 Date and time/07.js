const getSecondsToTomorrow = () => {
  const d = new Date();

  return Math.round(
    (new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1) - d) / 1000
  );
};
