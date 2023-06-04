let obj = {
    key: ['Jamil', 'Albrey']
};

const getElementOfArrayProperty = (obj, key, index) => {
    if(!obj[key]) return undefined;
    return obj[key][index];

}