export const emailValidation = (value) => {
  if (value) {
    const emailRegexp = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;
    if (emailRegexp.test(value) === true) {
      return undefined;
    }
    return "Email isn't correct";
  }
};
