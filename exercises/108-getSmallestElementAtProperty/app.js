let obj = {
  key: [2, 1, 5]
};
const getSmallestElementAtProperty = (obj, key) => {
  if (!obj[key]
    || !Array.isArray(obj[key])
    || obj[key].length === 0)
    return [];

  const output = Math.min(...obj[key]);
  return output
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1