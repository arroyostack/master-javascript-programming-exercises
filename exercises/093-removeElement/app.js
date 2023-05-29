// Write your function here

const removeElement = (arr, discard) =>{
    arr.forEach(item => delete item === discard)

    return arr
}
