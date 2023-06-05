const getLongestWordOfMixedElements = (arr) => {

    const excludeNumbers = arr.filter(item => !Number.isInteger(item));
    if(excludeNumbers.length === 0) return '';
    const shortString = excludeNumbers.sort((a,b) => b.length - a.length)[0];

    return shortString;


}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'