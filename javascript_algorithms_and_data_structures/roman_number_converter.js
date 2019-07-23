function convertToRoman(num) {
  var romans = {
    1: ["I", "X", "C", "M"],
    2: ["II", "XX", "CC", "MM"],
    3: ["III", "XXX", "CCC", "MMM"],
    4: ["IV", "XL", "CD", "MMMM"],
    5: ["V", "L", "D", "MMMMM"],
    6: ["VI", "LX", "DC", "MMMMMM"],
    7: ["VII", "LXX", "DCC", "MMMMMMM"],
    8: ["VIII", "LXXX", "DCCC", "MMMMMMMM"],
    9: ["IX", "XC", "CM", "MMMMMMMMM"]
  };

  let result = "";

  let numArr = num.toString().split("");
  // iterator used for separating numbers, having the same digits
  let i = 0;

  for (let digit of numArr) {
    // 0 is not present in the Roman numbers
    if (digit === "0") continue;
    // if there is a digit that occurs more than 1 time in the number enter this condition
    if (numArr.indexOf(digit) !== numArr.lastIndexOf(digit)) {
      // depending on the length of the number, use appropriate selection algorithm
      let n =
        num.toString().length < 3 ? i + [1, -1, -3][i] : i + [1, -1, -3][i - 1];
      result += romans[digit][n];
    } else {
      // if the number contains only unique numbers, use the current digit to access the romans array and get appropriate Roman Digit
      result += romans[digit][numArr.length - numArr.indexOf(digit) - 1];
    }
    // increase iterator after each loop
    i++;
  }

  return result;
}
convertToRoman(44);
