const isOldEnoughToVote = (age) => age < 18 ? false: true;

const output = isOldEnoughToVote(11);

console.log(output);