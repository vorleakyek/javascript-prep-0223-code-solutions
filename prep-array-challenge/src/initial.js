/* exported initial */

function initial(array) {
  const arrInitial = [];
  for (let i = 0; i < array.length - 1; i++) {
    arrInitial.push(array[i]);
  }
  return arrInitial;
}
