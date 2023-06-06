function fromListToObject(array) {
  const output = array.reduce((acc,curr) => {
    let key = curr[0];
    let val = curr[1];

    acc[key] = val;

    return acc
},{})
return output
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }