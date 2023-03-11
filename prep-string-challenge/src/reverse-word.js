/* exported reverseWord */
function reverseWord(word) {
  let result = '';
  for (let i = word.length - 1; i >= 0; i--) {
    result = result.concat(word[i]);
  }
  return result;
}
