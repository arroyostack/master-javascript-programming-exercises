const getOddLengthWordsAtProperty = (obj, key) => {
    if(!Array.isArray(obj[key])) return [];
    if(obj[key].length === 0) return [];
    if(!obj[key]) return [];
    
    let output;

    output = obj[key].filter(item => item.length % 2 !== 0);

    return output;
};