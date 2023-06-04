const getLastElementOfProperty = (obj, key) => {

    if(!Array.isArray(obj[key]) || !obj[key] ) return undefined;


    return obj[key][obj[key].length - 1];


}