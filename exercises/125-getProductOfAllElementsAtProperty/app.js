let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
  if(!obj[key] 
    || obj[key].length === 0 
    || !Array.isArray(obj[key])) 
    return 0;
 
    return obj[key].reduce((acc, curr) => acc * curr)
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24