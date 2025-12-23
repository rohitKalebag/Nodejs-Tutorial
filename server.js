const http = require('http');
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("<h2>Thinkify</h2>");
    response.end();
}).listen(2000);