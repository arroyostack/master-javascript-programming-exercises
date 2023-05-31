const getFirstElementOfProperty = (obj, key) => {

    if(!Array.isArray(obj[key]) || !obj[key] ) return undefined;


    return obj[key][0];


}

// Working, however did not pass test