var http = require('http');

fs = require('fs');


try {
http.createServer(function(req,res){
    let file;

    if (req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        file='./index.html'
    }
    else if (req.url=='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        file='./about.html'
    }
    else if (req.url=='/contact-me') {
        res.writeHead(200,{'Content-Type':'text/html'})
        file = './contact-me.html'
    }
    else {
        res.writeHead(404,{'Content-Type':'text/html'})
        file ='./404.html'
    }
   
    const data = fs.readFileSync(file,'utf8')
    res.write(data)
    return res.end
}).listen(3000)}
catch (err) {
  console.error(err);
};


