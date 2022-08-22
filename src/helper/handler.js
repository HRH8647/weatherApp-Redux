export const convertTemp = (temp) => {
  const newTemp = Math.floor(temp - 273.15);
  return newTemp;
};
