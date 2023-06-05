const sumDigits = (num) => {
    let arrConversion = Array.from(String(num), Number);
    let arrSum = arrConversion.reduce((acc, curr) => acc + curr); 
    
    if(num < 0) {
        arrConversion = Array.from(String(num * -1), Number);
        arrSum = arrConversion.reduce((acc, curr) => acc - curr) * -1; 
        
    }
    
    
    return arrSum;
};
let output = sumDigits(316);
console.log(output); // --> 4