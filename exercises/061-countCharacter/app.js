const countCharacter = (str, char) => {
    let result = 0;
    str.split('').forEach(item => item === char ? result++ : null)

    return result

}