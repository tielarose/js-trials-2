"use strict";

function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word);
    }
  }

  return result;
}

function kidsGame(names) {
  const output = [names[0]];

  console.log(output);
}

console.log(kidsGame[("apple", "berry", "cherry")]);
