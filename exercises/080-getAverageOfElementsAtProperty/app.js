// Write your function here

const getAverageOfElementsAtProperty = (obj, key) => {
    if (!obj[key]) { return 0 }
    else if(Array.isArray(obj[key]) === false){ return 0 }
    else if(obj[key].length === 0){ return 0};
    
    const totalSum = obj[key].reduce((acc, curr) => acc + curr);
    const average = totalSum / obj[key].length

    return average

}




