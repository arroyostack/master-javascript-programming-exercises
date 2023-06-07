const flipEveryNChars = (input, n) => {
    const output = [];
  
    for (let i = 0; i < input.length; i += n) {
      output.push(input[i+1], input[i]);
    }
  
    return output.join('');
  
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma