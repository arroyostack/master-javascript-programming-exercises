const search = (arr, x) => {
  let midpoint = Math.floor((0 + (arr.length - 1))/2);
  if(!arr.includes(x)) return null;
  else if (arr[midpoint] === x) {
      return midpoint;
  }
  else if (arr[midpoint] < x) {
      return search(arr.slice(midpoint+1), x) + midpoint + 1;
  }
  else {
      return search(arr.slice(0, midpoint), x);
  } 
  return null;
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4