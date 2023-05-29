const obj1 = {
    a: 1,
    b: 2
};

const obj2 = {
    b: 4,
    c: 3
    
}

const extend = (obj1, obj2) => {
    Object.assign(obj1, { ...obj2, ...obj1 })
    return obj1

}