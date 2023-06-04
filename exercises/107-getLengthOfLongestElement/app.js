const getLengthOfLongestElement = (arr) => {
    if(arr.length === 0) return 0;

    const wordLengths = arr.map(item => item.length);

    return Math.max(...wordLengths);
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5