/* exported getValues */
function getValues(object) {
  const result = [];
  for (const property in object) {
    result.push(object[property]);
  }
  return result;
}
