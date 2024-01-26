const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end('Hello Abi, epo veetuku vara or already veetla irundhu tha indha message padikuriya??!');
}).listen(8000);