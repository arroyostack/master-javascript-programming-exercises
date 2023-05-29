function removeArrayValues(obj) {
    // your code here
    Object.keys(obj).forEach(val => (
        Array.isArray(obj[val]) ? delete obj[val] : val
    ));

    return obj;

};