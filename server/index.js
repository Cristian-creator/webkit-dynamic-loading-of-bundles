const http = require('http');
const url = require('url');
const apiOneData = require('./api1.json');
const apiTwoData = require('./api2.json');

const stringifyData = (data) => JSON.stringify(data);

const server = http.createServer((req, res) => {
    const reqestURL = url.parse(req.url).pathname;
    
    if(req.method === 'GET' && reqestURL === '/api1') {
        res.end(stringifyData(apiOneData));
    } else if(req.method === 'GET' && reqestURL === "/api2") {
        res.end(stringifyData(apiTwoData));
    }
});

server.listen(5000);
