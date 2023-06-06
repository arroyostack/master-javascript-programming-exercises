const computeSumBetween = (num1, num2) => {
    // Your code here

    let total = 0;

    for(let i = num1; i <= (num2 - 1); i++){
    total =  i + total 
    console.log(i)
    }

    return total;

}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9