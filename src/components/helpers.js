export const randomOf = unit => Math.floor(Math.random() * unit);
export const getValueFromPercentage = number => parseFloat(number.slice(0, number.length - 1))