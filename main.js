const http = require('http');
const fs= require('fs');

const server = http.createServer(function (req, res) {
  if(req.url =="/") {
        fs.writeFile('demo.text', "hello Kacher Manushjon", (err)=>{
            if(err) {
                res.writeHead(200, {'content-type': 'text/html'})
                res.write('File Write Fail');
                res.end()
            } else {
                res.writeHead(200, {'content-type': 'text/html'})
                res.write('File Success');
                res.end()
            }
        })
  }
})

server.listen(5000)
console.log("server run successfully")