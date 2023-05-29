const getAllElementsButNth = (array, n) => {
    // Write your function he
    array.splice(n, n)
    return array

}
let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']