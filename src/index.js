const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(MORSE_TABLE) {
    // write your solution here

    
        MORSE_TABLE = MORSE_TABLE.trim();
        let refinedData = MORSE_TABLE.split('   ');
        let result = [];

        for (let i = 0; i < refinedData.length; i++) {
          let temp = refinedData[i].split(' ');
          for (let j = 0; j < temp.length; j++) {
            if (MORSE_TABLE[temp[j]]) {
              result.push(MORSE_TABLE[temp[j]]);
            }
          }

          if (i !== refinedData.length - 1) {
          result.push(' ');
          }
        }
        return result.join('');
      

module.exports = {
    decode
}


let result = "";
  let arr = expr.split("");

  for (let i = 0; i < expr.length / 10; i++) {
    let letter = "";
    let char = arr.slice(i * 10, (i + 1) * 10);
    for (let x = 0; x < char.length / 2; x++) {
      let dot = char.slice(x * 2, (x + 1) * 2).join("");
      if (dot == "**") {
        letter = " ";
        break;
      }
      if (dot == "10") {
        letter += ".";
      }
      if (dot == "11") {
        letter += "-";
      }
    }
    result += MORSE_TABLE[letter] ? MORSE_TABLE[letter] : " ";
  }
  return result;
}