//fileSysytem(fs) synchronous

/*const fs = require('fs');
fs.readFileSync();
fs.writeFileSync();
*/
const { readFileSync , writeFileSync } = require('fs');

console.log("start project");
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
console.log(first, second);

writeFileSync('./content/result-sync.txt',
`The result is : ${first} , ${second}`,
{flag :'a'}
)
console.log("complete project");
console.log("End project");