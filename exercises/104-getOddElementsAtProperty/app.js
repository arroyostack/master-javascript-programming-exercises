let obj = {
  key: [1, 2, 3, 4, 5]
};

const getOddElementsAtProperty = (obj, key) => {
  if(!Array.isArray(obj[key]) || !obj[key] || obj[key].length === 0){
    return [];
  }
  return obj[key].filter(item => item % 2 !== 0);
};

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]