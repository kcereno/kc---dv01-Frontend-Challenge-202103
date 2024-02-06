// Extracts unique values from an array of objects based on a key
export const extractUniqueValues = (arr: any[], key: string) => {
  return Array.from(new Set(arr.map((entry) => entry[key]))).sort();
};

export const convertToDollarString = (number: number) =>
  number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
