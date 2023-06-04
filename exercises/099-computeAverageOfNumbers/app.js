const computeAverageOfNumbers = (arr) => {
    if(!arr || arr.length == 0) return 0;
    let sum = arr.reduce((acc, curr) => acc + curr);
    let output = sum / arr.length;

    return output;
}
