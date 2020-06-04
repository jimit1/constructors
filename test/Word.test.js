const Word = require("../util/Word");

describe("Word", () => {
  describe("Success", () => {
    it("Should create a new word object with the word set to argument", () => {
      const testWord = new Word("test");
      expect(testWord).toEqual({ word: "test" });
    });
  });
  describe("getWord", () => {
    it("Should return word", () => {
      const testWord = new Word("test");
      expect(testWord.getWord).toBe("test");
    });
  });
  describe("setWord", () => {
    it("Should set the word to the argument that was passed", () => {
      const testWord = new Word("test");
      testWord.setWord = "things";
      expect(testWord).toEqual({ word: "things" });
    });
  });
  describe("rev", () => {
    it("Should return a new object with the initial word reversed", () => {
      const testWord = new Word("test");
      expect(testWord.rev).toEqual({ word: "tset" });
    });
  });
});
