export const roundUpToNearest = (value: number, increment: number) =>
  Math.ceil(value / increment) * increment;

export const calculateTicks = (min: number, max: number, increment: number) => {
  const numbers = [];
  let currentNum = min;

  while (currentNum <= max) {
    numbers.push(currentNum);
    currentNum += increment;
  }

  if (numbers.length > 0) {
    const lastIndex = numbers.length - 1;
    if (numbers[lastIndex] > max) {
      numbers[lastIndex] = Math.round(max);
    }
  }

  return numbers;
};

export const calculateIncrement = (maxYValue: number) => {
  let increment;

  if (maxYValue <= 20000) {
    increment = 1000;
  } else if (maxYValue <= 100000) {
    increment = 10000;
  } else if (maxYValue <= 250000) {
    increment = 50000;
  } else if (maxYValue <= 500000) {
    increment = 100000;
  } else if (maxYValue <= 1000000) {
    increment = 250000;
  } else {
    increment = 500000; // Default increment for values above 1,000,000
  }

  return increment;
};
