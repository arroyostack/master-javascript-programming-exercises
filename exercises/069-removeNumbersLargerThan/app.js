let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
const removeNumbersLargerThan = (obj, num) => {
    Object.keys(obj).forEach(val => obj[val] > num ? delete obj[val] : val);
    return obj;
}

// Working, however the test do not pass
