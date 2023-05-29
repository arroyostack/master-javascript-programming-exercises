const removeOddValues = (obj) => {
    // your code here
    Object.keys(obj).forEach(val => (
        obj[val] % 2 !== 0 ? delete obj[val] : val
    ));

    return obj;

}