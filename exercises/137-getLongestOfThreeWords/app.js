const getLongestOfThreeWords = (word1, word2, word3) => {
   const wordArray = [word1, word2, word3];
   const output = wordArray.reduce((acc, curr) => {
    return curr.length > acc.length ? curr: acc;
   })

   return output;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'