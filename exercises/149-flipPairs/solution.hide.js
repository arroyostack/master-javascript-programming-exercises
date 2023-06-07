function flipPairs(input) {
  const output = [];

  for (let i = 0; i < input.length; i += 2) {
    output.push(input[i+1], input[i]);
  }

  return output.join('');

}

let input =
  "check out how interesting this problem is, it's insanely interesting!";
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!


// Working, however test did not pass