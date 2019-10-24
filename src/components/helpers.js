export const randomOf = unit => Math.floor(Math.random() * unit);
export const getValueFromString = (string, unitLength) =>
  parseFloat(string.slice(0, string.length - unitLength));
