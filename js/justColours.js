const bgBlue = '\x1b[44m ';

const repeatStringNumTimes = (str, num) => {
  let repeatedString = '';

  for (let i = 0; i < num; i++) {
    repeatedString += str;
  }
  return repeatedString;
};

// console.log(repeatStringNumTimes(bgBlue, 40));

//Prints a rainbow flag
let array = [];
let num = 0;
for (let j = 0; j < 5; j++) {
  for (let i = 0; i < 20; i++) {
    switch (num) {
      case 0:
        array.push('\x1b[41m '); //red
        break;
      case 1:
        array.push('\x1b[43m '); //yellow
        break;
      case 2:
        array.push('\x1b[42m '); //green
        break;
      case 3:
        array.push('\x1b[44m '); //blue
        break;
      case 4:
        array.push('\x1b[45m '); //magenta
        break;
    }
  }
  num++;
  array.push('\x1b[0m', '\n');
}
console.log(array.join(''));
