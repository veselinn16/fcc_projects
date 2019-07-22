// A function, which validates US phone numbers
function telephoneCheck(str) {
  if (str.match(/[^0-9-() ]/)) return false;
  let a = str.match(/[0-9]/g);
  if (str.match(/[)(]/)) {
    if (str.match(/[)(]/g).length % 2 !== 0) return false;
  }
  if (a.length > 11 || a.length < 10) return false;
  if (a.length === 11 && a[0] !== "1") return false;
  if (!str[0].match(/(...).|[0-9]]/)) return false;

  return true;
}
