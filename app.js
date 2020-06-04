const Word = require("./util/Word");

let funkyText = new Word("Thing").rev;

funkyText = funkyText.rev;

console.log(funkyText);
