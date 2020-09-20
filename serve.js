const { readFile } = require('fs');

require('http').createServer((req, res) => {
    const path = req.url.split('?')[0];

    readFile(`${__dirname}${path === '/' ? '/index.html' : path}`, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
        }

        res.writeHead(200);
        res.end(data);
    });
}).listen(8080);