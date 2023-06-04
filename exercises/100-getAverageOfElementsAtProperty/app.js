const getAverageOfElementsAtProperty = (obj, key) => {
  if (!obj[key]
    || !Array.isArray(obj[key])
    || obj[key].length === 0)
     { return 0; }

  let sum = obj[key].reduce((acc, curr) => acc + curr);
  let output = sum / obj[key].length;

  return output
}