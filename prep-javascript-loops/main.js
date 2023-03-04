// create your loops here.
function whileLoop1() {
  let i = 0;
  const array = [];
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}
console.log('whileLoop1 output,', whileLoop1());

function whileLoop2() {
  let i = 0;
  const array = [];
  while (i < 20) {
    array.push(i);
    i += 2;
  }
  return array;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time til explosion ' + i + '!');
  }
}
forLoop2();

function forInLoop1(object) {
  const array = [];
  for (const property in object) {
    array.push(property);
  }
  return array;
}
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};
console.log('for in loop 1 output', forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const property in object) {
    array.push(object[property]);
  }
  return array;
}
console.log('for in loop 2 output', forInLoop2(object));
