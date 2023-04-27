const or = (expression1, expression2) => (
  expression1 === false && expression2 === false ? false : true
)
console.log(or(false || false))