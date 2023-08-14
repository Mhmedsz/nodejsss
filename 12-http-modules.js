const http = require('http');

//ezay a createServer

/*const server = http.createServer((req, res) =>{
   
    console.log(req);
    res.write('This is the home page');
    res.end();
});*/

const server = http.createServer((req, res) =>{
     if(req.url === '/'){
        res.end('Home page');
     }
     else if(req.url === '/about'){
        res.end('About page');
     }
     else{ 
        res.end(`
        <h1>Oops!</h1>
        <p>wrong answer for this page</p>
        <a href='/'>Back Home</a>`
)}
})

server.listen(5000);
