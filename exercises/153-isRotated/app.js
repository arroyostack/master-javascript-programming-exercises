const isRotated = (str1, str2) => {
  if(str1.length !== str2.length) return false;
  const concatStr = str1.concat(str1);

  return concatStr.includes(str2);
}
  console.log(isRotated('hello world', 'orldhello w')); // => true
  console.log(isRotated('hello world', 'omrel wp')); // => false
  
