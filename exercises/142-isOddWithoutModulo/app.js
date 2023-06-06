const isOddWithoutModulo = (num) => {
    const numPositive = Math.abs(num)
    const division = parseInt(numPositive / 2);
    const multiply = division * 2;
    const output = numPositive - multiply;
    if(output === 1) return true;
    if(output === 0) return false;
    
}
let output = isOddWithoutModulo(17);
console.log(output); // --> true