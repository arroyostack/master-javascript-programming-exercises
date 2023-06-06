const transformEmployeeData = (array) => {
  let output = [];
  array.forEach(times => {
    let containerObject = {};
    times.forEach(val => {
      containerObject[val[0]] = val[1];
    });
    output.push(containerObject);
  });
  return output;
}