// A function, which takes a string of words, encoded in the ROT13 cipher and deciphers it
function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let wordArr = str.split("");
  let result = wordArr.map(el => {
    let index = alphabet.indexOf(el);
    if (el.match(/\W/)) return el;
    return index >= 13 ? alphabet[index - 13] : alphabet[index + 13];
  });

  return result.join("");
}
