/* exported tail */
function tail(array) {
  const arrTail = [];
  for (let i = 1; i < array.length; i++) {
    arrTail.push(array[i]);
  }
  return arrTail;
}
