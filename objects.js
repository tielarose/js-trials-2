'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCounts = {}

  for (let word of phrase.split(" ")) { 
    if (word in wordCounts) {
      wordCounts[word] += 1;
    } else { 
      wordCounts[word] = 1;
    }
  }

  return wordCounts
}

// const myPhrase = 'hello hi hola hi yo hola'
// console.log(countWords(myPhrase))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  let melonPrices = {
        2.50: ['Cantaloupe', 'Honeydew'],
        2.95: ['Watermelon'],
        3.25: ['Musk', 'Crenshaw', 'Greenmelon'],
        14.25: ['Christmas']
    }

  return melonPrices[price].sort()
  
}
   

console.log(getMelonsAtPrice(3.25))

