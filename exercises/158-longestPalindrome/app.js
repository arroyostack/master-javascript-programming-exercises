function findLongestPalindrome(sentence) {
  // split sentence into words
  const splitted = sentence.toLowerCase().split(' ');
  // iterate words and collect the palindromes
  const palin = isPalindrome(splitted);


  // sort the list of palindromes by word length
  const sortPalin = palin.sort(((a, b) => b.length - a.length)) 

  // return the largest item in the sorted list
  return sortPalin.reduce((acc,curr) => acc.length > curr.length ? acc:curr)
}


function reverseString(string) {
  return string.split('').reverse().join('')
}


function isPalindrome(word) {
  const palindromes = word.filter(item => item === reverseString(item))
  return palindromes
}

// WORKING , HOWEVER TEST FAIL