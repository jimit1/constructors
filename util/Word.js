class Word {
  constructor(wrd) {
    this.word = wrd;
  }
  get getWord() {
    return this.word;
  }
  setWord(wrd) {
    this.word = wrd;
  }
}

// function Word(wrd) {
//   this.word = wrd;
// }

// Word.prototype.getWord = function () {
//   return this.word;
// };

// const specialWord = new Word("hello");

// console.log(specialWord);

module.exports = Word;
