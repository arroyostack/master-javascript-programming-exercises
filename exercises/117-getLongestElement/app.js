const getLongestElement = (arr) => {
    if (arr.length === 0) return '';

    const output = arr.reduce((acc, max) => max.length > acc.length ? max : acc);

    return output;
};
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'