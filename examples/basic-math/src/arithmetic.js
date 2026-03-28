export const add = (a, b) => {
  if (typeof a == 'string') a = Number(a);
  if (typeof b == 'string') b = Number(b);

  if (isNaN(a)) throw new Error('The first parameter is not a number');
  if (isNaN(b)) throw new Error('The second parameter is not a number');

  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  if (b == 0) return null;

  return a / b;
};
