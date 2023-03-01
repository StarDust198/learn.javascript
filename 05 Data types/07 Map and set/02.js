const aclean = (arr) => {
  const set = new Set();

  const result = arr.filter((item) => {
    const key = item.toLowerCase().split('').sort().join('');
    if (set.has(key)) return false;
    set.add(key);
    return true;
  });

  return result;
};
