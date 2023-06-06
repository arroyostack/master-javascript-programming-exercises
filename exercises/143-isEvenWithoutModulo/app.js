const isEvenWithoutModulo = (num) => {
    const numPositive = Math.abs(num)
    const division = parseInt(numPositive / 2);
    const multiply = division * 2;
    const output = numPositive - multiply;
    if(output === 1) return false;
    if(output === 0) return true;
    
}
let output = isEvenWithoutModulo(8);
console.log(output); // --> true