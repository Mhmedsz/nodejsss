//fileSysytem(fs) Asynchronous
const { readFile , writeFile} = require('fs');
console.log("start project");
readFile('./content/first.txt','utf-8',(err,result1) =>{
    if(err){
        console.log(err);
    }
    console.log(result1);
readFile('./content/second.txt','utf-8',(err,result2) =>{
    if(err){
        console.log(err);
    }
    console.log(result2);
writeFile('./content/result-async.txt',
`Hi there : ${result1} , ${result2}`, (err,result3) =>{
if(err){
    console.log(err);
}
console.log(result3);})
console.log("complete project");
})
})
console.log("End project");