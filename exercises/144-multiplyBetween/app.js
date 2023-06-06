const multiplyBetween = (num1, num2) => {
    if(num2 < num1) return 0;

    let total = 1;

    for(let i = num1; i <= (num2 - 1); i++){
    total =  i * total;
    };

    return total;

};

let output = multiplyBetween(2, 5);
console.log(output); // --> 24