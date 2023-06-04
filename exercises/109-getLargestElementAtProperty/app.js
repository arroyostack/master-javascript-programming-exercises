let obj = {
  key: [1, 2, 4]
};
const getLargestElementAtProperty = (obj, key) => {
  if (!obj[key]
    || !Array.isArray(obj[key])
    || obj[key].length === 0)
    return [];

  const output = Math.max(...obj[key]);
  return output
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4