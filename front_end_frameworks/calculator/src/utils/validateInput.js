export const validateUserInput = (currentInput, input) => {
  if (/=/.test(currentInput)) return input;

  // get last character of user input
  let lastChar = currentInput[currentInput.length - 1];

  // if the last character of user input is a decimal point and user is trying to input operation,
  // return the current user input without the operation
  if (lastChar === "." && /[X/\-+]/.test(input)) return currentInput;

  // disable adding multiple decimal points in a number
  let chars = currentInput.split(/[X/\-+]/);
  if (chars[chars.length - 1].includes(".") && input === ".") {
    return currentInput;
  }

  if (currentInput === "0" && input === currentInput) {
    // in case the number currently is 0 and the user is clicking on 0
    return currentInput;
  }

  if (currentInput === "0" && input === ".") return currentInput;

  if (currentInput === "0" && currentInput !== input) {
    // in case the number currently is 0
    return input;
  }

  if (currentInput.match(/[X/\-+.]/)) {
    // disable adding multiple operations and decimal points
    if (lastChar.match(/[X/\-+.]/) && input.match(/[X/\-+.]/))
      return currentInput;
  }

  return currentInput + input;
};
