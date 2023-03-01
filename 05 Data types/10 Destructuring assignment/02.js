const topSalary = (salaries) => {
  const entries = Object.entries(salaries);

  if (entries.length === 0) return null;

  let topName,
    topSalary = 0;

  for (let [name, salary] of entries) {
    if (salary > topSalary) {
      [topName, topSalary] = [name, salary];
    }
  }

  return topName;
};
