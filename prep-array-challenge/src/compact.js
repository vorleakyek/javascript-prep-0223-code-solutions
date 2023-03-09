/* exported compact */
function compact(array) {
  const arrTruthy = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      arrTruthy.push(array[i]);
    }
  }
  return arrTruthy;
}
