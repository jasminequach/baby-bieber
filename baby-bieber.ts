// the problem with searching for "i": function might check for all instances of the letter "i" inside of other words

import { bieberBaby } from './baby-bieber-lyrics';

function hasGone(arr: string[]): number {
  let counter: number = 0;
  arr.forEach((word) => {
    if (word.toLowerCase() === 'gone') {
      counter++;
    }
  });
  return counter;
}

console.log(hasGone(bieberBaby));
