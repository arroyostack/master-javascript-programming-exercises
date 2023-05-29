let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
const removeNumberValues = (obj) => {
    // your code here
    Object.keys(obj).forEach(val => typeof obj[val] === 'number' ? 
    delete obj[val]
    : val)

    return obj
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }