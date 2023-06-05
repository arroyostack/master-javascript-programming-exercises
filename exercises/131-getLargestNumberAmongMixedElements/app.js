const getLargestNumberAmongMixedElements = (arr) => {

    const excludeNumbers = arr.filter(item => typeof item !== 'string');
    if(excludeNumbers.length === 0) return 0;
    const shortString = excludeNumbers.sort((a,b) => b - a )[0];
  
    return shortString;
  
  
  }

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5