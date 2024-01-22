// Parsing Request URL with path and query params
const http = require('http');

const url = require('url');

const port = 8000;

const server = http.createServer((req, res) => {
   const parsedURL = url.parse(req.url, true);
   const queryData = parsedURL.query;

   if(parsedURL.pathname === '/user') {
       const userId = queryData.id;
       const userName = queryData.name;
       if(userId && userName) {
           res.writeHead(200, {'content-Type': 'text/plain'});
           res.end(`User id:${userId}, User Name: ${userName}`);
       } else {
           res.writeHead(200, {'content-Type': 'text/plain'});
           res.end("Invalid Parameter");
       }
   } else{
       res.writeHead(404, {'content-Type': 'text/plain'});
       res.end("Not Found");
   }
});

server.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
})

// Building URL

// const http = require('http');
//
// const url = require('url');
//
// const port = 8000;
//
// const constructedURL = new URL('http://www.sahosoft.com');
// constructedURL.pathname = '/about';
// constructedURL.searchParams.set('id', 1);
// console.log('Constructed URL', constructedURL);
//
//
// const server = http.createServer((req, res) => {
//     console.log('Server Started');
//     console.log(req.url);
//     if(req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Home Page');
//     } else if(req.url === '/about') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('About Page');
//     } else {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Not Found');
//     }
// });
//
// server.listen(port, () => {
//     console.log(`Server running in http://localhost:${port}`);
// })

// Parsing URL

// const http = require('http');
//
// const port = 8000;
//
// const server = http.createServer((req, res) => {
//     console.log('Server Started');
//     console.log(req.url);
//     if(req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Home Page');
//     } else if(req.url === '/about') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('About Page');
//     } else {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Not Found');
//     }
// });

// server.listen(port, () => {
//     console.log(`Server running in http://localhost:${port}`);
// })


// const http = require('http');
// const fs = require('fs');
//
// const port = 8000;
//
// const data = fs.readFileSync('data.json', 'utf-8');
//
// const server = http.createServer((req, res) => {
//     console.log('Server Started');
//     console.log(req.url);
//     res.status = 200;
//     res.setHeader('Content-Type', 'application/json')
//     res.end(data);
// });

// const http = require('http');
// const fs = require('fs');
//
// const port = 8000;
//
// const index = fs.readFileSync('data.json', 'utf-8');
//
// const server = http.createServer((req, res) => {
//     console.log('Server Started');
//     console.log(req.url);
//     res.status = 200;
//     res.setHeader('Content-Type', 'application/json')
//     res.end(index);
// });

// server.listen(port, () => {
//     console.log(`Server running in http://localhost:${port}`);
// })

// const http = require('http');
//
// const port = 8000;
//
// const server = http.createServer((req, res) => {
//     console.log('Server Started');
//     res.status = 200;
//     res.setHeader('Content-Type', 'text/plain')
//     res.end("Hello from NodeJS Server");
// });
//
// server.listen(port, () => {
//     console.log(`Server running in http://localhost:${port}`);
// })
