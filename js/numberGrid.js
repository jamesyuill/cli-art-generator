// for (let x = 0; x < 10; x++) {
//   for (let y = 0; y < 10; y++) {
//     process.stdout.write('O ');
//   }
//   console.log('');
// }

let array = [];
for (let x = 0; x < 10; x++) {
  let innerArray = [];
  for (let y = 0; y < 10; y++) {
    innerArray.push('O ');
  }
  array.push(innerArray.join(''));
}

console.log(array);
