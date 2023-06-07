const isIsogram = (text) => {
  const isoSet = new Set(text)
  return isoSet.size === text.length ? true : false
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false