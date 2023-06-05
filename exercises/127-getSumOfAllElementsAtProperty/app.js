let obj = {
    key: [4, 1, 8]
};

const getSumOfAllElementsAtProperty = (obj, key) => {
    if (obj[key] === undefined
        || obj[key].length === 0
        || !Array.isArray(obj[key])
        || !obj[key]
    ) return 0;

    return obj[key].reduce((acc, val) => acc + val)
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13