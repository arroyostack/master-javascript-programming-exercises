
let obj = {
  key: [1000, 11, 50, 17]
};

const getEvenElementsAtProperty = (obj, key) => {
  if(!Array.isArray(obj[key]) || !obj[key] || obj[key].length === 0){
    return [];
  }
  return obj[key].filter(item => item % 2 === 0);
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]