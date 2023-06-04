const filterOddLengthWords = (words) => (
 words.filter(item => item.length % 2 !== 0)
)

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']