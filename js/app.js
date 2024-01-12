const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `give me four random characters? eg: '9/~e': `,
  (characters) => {
    let num = 0;
    while (num < 20) {
      let line = [];
      for (let x = 0; x < 40; x++) {
        let random = Math.floor(Math.random() * 4);
        switch (random) {
          case 0:
            line.push('\x1b[33m', '\x1b[47m', characters[0]);
            break;
          case 1:
            line.push('\x1b[34m', '\x1b[47m', characters[1]);
            break;
          case 2:
            line.push('\x1b[36m', '\x1b[47m', characters[2]);
            break;
          case 3:
            line.push('\x1b[31m', '\x1b[47m', characters[3]);
            break;
        }
      }
      console.log(line.join(''), '\x1b[0m');
      num++;
    }
    readline.close();
  }
);
