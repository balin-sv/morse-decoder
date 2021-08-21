const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  " ": " ",
};

function decode(expr) {
  let partOfExpr = "";
  let arrayOfStrings = [];
  let morseString = "";

  for (let i = 0; i < expr.length; i = i + 10) {
    partOfExpr = expr.slice(i, i + 10).replace(/^0+/, "");
    arrayOfStrings.push(partOfExpr);
  }

  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i] === "**********") {
      arrayOfStrings[i] = " ";
    } else {
      arrayOfStrings[i] = arrayOfStrings[i].match(/.{1,2}/g);

      for (let j = 0; j < arrayOfStrings[i].length; j++) {
        if (arrayOfStrings[i][j] === "10") {
          arrayOfStrings[i][j] = ".";
        } else {
          arrayOfStrings[i][j] = "-";
        }
        morseString = morseString + arrayOfStrings[i][j];
      }
      arrayOfStrings[i] = morseString;
      morseString = "";
    }
  }

  return arrayOfStrings
    .map((index) => MORSE_TABLE[index]) // decode Morse code
    .join("");
}

module.exports = {
  decode,
};
