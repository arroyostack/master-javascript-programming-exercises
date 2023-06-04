const filterEvenLengthWords = (arr) => {
    if(!Array.isArray(arr) || !arr || arr.length === 0){
      return [];
    }
    return arr.filter(item => item.length % 2 === 0);
  };

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']