let obj = {
    name: 'Sam',
    age: 20
}

const removeStringValues = (obj) => {
    // your code here
    Object.keys(obj).forEach(val => typeof obj[val] === 'string' ? 
    delete obj[val]
    : val)

    return obj
}

removeStringValues(obj);
console.log(obj); // { age: 20 }
