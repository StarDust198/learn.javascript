const checkSpam = (str) => {
  const lowerCase = str.toLowerCase();

  return lowerCase.includes('xxx') || lowerCase.includes('viagra');
};
