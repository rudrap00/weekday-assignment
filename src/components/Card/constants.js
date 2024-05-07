const salaryStructure = (min, max) => {
  if (min && max) return `${min}K - ${max}K`;
  else if (min || max) return `${min || max}K`;
  else return "";
};

export default salaryStructure;
