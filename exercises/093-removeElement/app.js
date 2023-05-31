// Write your function here

const removeElement = (arr, discard) => {
    const result = arr.filter(item => item !== discard);
    return [...result]
}