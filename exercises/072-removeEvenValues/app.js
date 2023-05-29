const removeEvenValues = (obj) => {
    Object.keys(obj).forEach(val => obj[val] % 2 === 0 ? delete obj[val] :val)
    return obj
  }
  
  let obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas',
  };
  
  removeEvenValues(obj);
  
  // Working, however did not ass the test
  