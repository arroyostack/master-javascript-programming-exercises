const findShortestElement = (arr) => {
    if (arr.length === 0) return '';

    const output = arr.reduce((acc, max) => max.length < acc.length ? max : acc);

    return output;
};

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'