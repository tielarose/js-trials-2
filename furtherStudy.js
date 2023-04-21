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
  const output = [names.shift()];

  const firstLetterToWords = {};

  for (const name of names) {
    const letter = name[0];
    if (letter in firstLetterToWords) {
      firstLetterToWords[letter].push(name);
    } else {
      firstLetterToWords[letter] = [name];
    }
  }

  while (true) {
    let currWord = output.slice(-1)[0];
    let lastIndex = currWord.length - 1;
    let startLetter = currWord.charAt(lastIndex);

    if (
      startLetter in firstLetterToWords &&
      firstLetterToWords[startLetter].length !== 0
    ) {
      const word = firstLetterToWords[startLetter].shift();
      output.push(word);
    } else {
      break;
    }
  }

  return output;
}
