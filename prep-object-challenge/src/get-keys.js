/* exported getKeys */
function getKeys(object) {
  const result = [];
  for (const property in object) {
    result.push(property);
  }
  return result;
}
