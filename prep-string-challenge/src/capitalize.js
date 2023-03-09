/* exported capitalize */
function capitalize(word) {
  const firstChar = word[0].toUpperCase();
  const remainingChar = word.slice(1).toLowerCase();
  return firstChar + remainingChar;
}
