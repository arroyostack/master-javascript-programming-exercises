const getElementsGreaterThan10AtProperty = (obj, key) => {

    let equals = [];

    if(!obj[key] || !Array.isArray(obj[key] || obj[key].length === 0)){
        return []
    }

    obj[key].forEach(item => {
        if(item > 10){
            equals.push(item)
        }
    })

    return equals;
}