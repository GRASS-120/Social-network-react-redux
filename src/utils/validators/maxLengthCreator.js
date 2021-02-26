// Использование замыкания
export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) {
    return `Max length is ${maxLength}`;
  }
  return undefined;
};
