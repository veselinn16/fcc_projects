// A palindrome is a word or sentence that's spelled the same way forward and backward, ignoring punctuation, case and spacing.
function palindrome(str) {
  let arr = str.toLowerCase().split("");
  let strArr = arr.filter(el => {
    if (el.match(/\w/) && !el.match(/_/)) {
      return el;
    }
  });

  let newStr = strArr.join("");
  return strArr.reverse().join("") === newStr;
}
