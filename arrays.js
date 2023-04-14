'use strict';

const arr = ['do', 're', 'me', 'fa', 'sol', 'la', 'ti']

// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (let i = 0; i < items.length; i += 2) {
    result.push(items[i])
  }

  console.log(result);
}
    

// 3. smallestNItems
function smallestNItems(items, n) {
  // let sortedItems = items.sort((a, b) => a - b)
  // let sortedNItems = sortedItems.slice(0, n).reverse()
    // console.log(sortedNItems)

  console.log(items.sort((a, b) => a - b).slice(0,n).reverse())

}

const numArray = [4, 1, 9, 3, 0, -5]

smallestNItems(numArray, 3)

// # compareFn(a, b) return value	sort order
// # > 0	sort a after b, e.g. [b, a]
// # < 0	sort a before b, e.g. [a, b]
// # === 0	keep original order of a and b

// Array.sort((a, b) => a - b)
// a - b > 0 -- > b, a
// a - b < 0 -- > ab,
// a - b == 0 --> keep the same rder aa a, b

// let arr = [4,2,9]
// (4,2) => 4 - 2 = 2 > 0  [2,4]
// (4,9) => 4 - 9 = -5 < 0 [2,4,9]

// sort smallest to largest: (a,b) => a - b
// sort largest to smallest: (a,b) => b - a