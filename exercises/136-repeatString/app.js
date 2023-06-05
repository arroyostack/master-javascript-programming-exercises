const repeatString = (string, num) => {
    let wordArray = [string];

    for(let i = 1; i < num; i++){
        wordArray.push(string);
    }

    return wordArray.join('');
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'