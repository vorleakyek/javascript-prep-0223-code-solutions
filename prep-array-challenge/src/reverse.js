/* exported reverse */
function reverse(array) {
  const arrReverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrReverse.push(array[i]);
  }
  return arrReverse;
}
