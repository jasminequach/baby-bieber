"use strict";
// the problem with searching for "i": function might check for all instances of the letter "i" inside of other words
Object.defineProperty(exports, "__esModule", { value: true });
const baby_bieber_lyrics_1 = require("./baby-bieber-lyrics");
function hasGone(arr) {
    let counter = 0;
    arr.forEach((word) => {
        if (word.toLowerCase() === 'gone') {
            counter++;
        }
    });
    return counter;
}
console.log(hasGone(baby_bieber_lyrics_1.bieberBaby));
