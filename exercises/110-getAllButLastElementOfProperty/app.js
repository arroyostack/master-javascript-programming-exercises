let obj = {
  key: [1, 2, 3]
};
const getAllButLastElementOfProperty = (obj, key) => {
  if(!Array.isArray(obj[key] || !obj[key])) return [];
  obj[key].pop();
  return obj[key];
}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]