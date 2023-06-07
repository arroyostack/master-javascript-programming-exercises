const findPairForSum = (array, sum) => {
  let map = {},
    results = []

      for (let i = 0; i < array.length; i++){
          if (map[array[i]]){
              results.push([map[array[i]], array[i]])
          }else{
              map[sum - array[i]] = array[i];
          }
        }
        return results;
  }

  //Working, however test did not pass
