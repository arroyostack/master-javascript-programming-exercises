const findShortestWordAmongMixedElements = (arr) => {

    const excludeNumbers = arr.filter(item => !Number.isInteger(item));
    if(excludeNumbers.length === 0) return '';
    const shortString = excludeNumbers.sort((a,b) => a.length - b.length)[0];

    return shortString;


}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'