const average = (array_of_numbers) => {
  const length = array_of_numbers.length;
  const output = sum(array_of_numbers) / length;
  return output;
}

const sum = (numbers) => (
  numbers.reduce((a, b) => a + b)
)
