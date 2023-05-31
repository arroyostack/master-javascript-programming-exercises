// Write your function here
const getNthElementOfProperty = (obj, key, nth) => {

    if(!Array.isArray(obj[key]) || !obj[key] ) return undefined;


    return obj[key][nth];


}