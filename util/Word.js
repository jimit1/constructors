class Word {
  constructor(wrd) {
    this.word = wrd;
  }

  get rev() {
    return new Word(this.word.split("").reverse().join(""));
  }

  get cap() {
    return new Word(this.word.toUpperCase());
  }

  get low() {
    return new Word(this.word.toLowerCase());
  }

  get getWord() {
    return this.word;
  }
  set setWord(wrd) {
    this.word = wrd;
  }

  get isPal() {
    return this.word.split("").reverse().join("") === this.word;
  }
}

module.exports = Word;
