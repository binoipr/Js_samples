function palindromeRearranging(a) {
  let count = 0;
  a = a.split("");
  let obj = CharCount(a);
  Object.keys(obj).forEach((key) => {
    if (obj[key] % 2 != 0) {
      count++;
    }
  });
  return count <= 1;
}

function CharCount(arr) {
  return arr.reduce((obj, e) => {
    obj[e] = (obj[e] || 0) + 1;
    return obj;
  }, []);
}
