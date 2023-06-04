let obj = {
  key: [2, 1, 5]
};

const getSquaredElementsAtProperty = (obj, key) => {
  if (!Array.isArray(obj[key]) || !obj[key]) return [];

  return obj[key].map(item => Math.pow(item, 2));
  
}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]