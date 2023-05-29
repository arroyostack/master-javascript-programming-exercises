// Write your function here


const countAllCharacters = (str) => {
    const countObj = str.split('').reduce((char, curr) => {
        if(char[curr]) {
            char[curr]++
        } else {
            char[curr] = 1
        }

        return char
    }, {})

    return countObj;
}