const detectOutlierValue = string => {
    const arr = string.split(" ").map(num => Number(num)).filter(Boolean);
    const even = arr.filter(x => x % 2 === 0);
    const odd = arr.filter(x => x % 2 !== 0);
    return even.length > odd.length ? arr.indexOf(odd[0]) + 1 : arr.indexOf(even[0]) + 1;
  }
// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2