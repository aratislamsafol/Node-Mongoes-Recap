const http = require('http');
const fs= require('fs');

const server = http.createServer(function (req, res) {
  if(req.url =="/") {
        fs.readFile('Home.html', function(err, data) {
            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
        })
  }
})

server.listen(5000)
console.log("server run successfully")