let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

const removeNumbersLessThan = (obj, num) => {
    Object.keys(obj).forEach(val => obj[val] < num ? delete obj[val] : val);
    return obj;
}

// Working. However did not pass the test.
