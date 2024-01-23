const express = require('express');

const server = express();

const port = 9000;

server.get('/', (req, res) => {
    //res.send('<h1>Hello</h1>');
    res.json({type: 'GET'});
});

server.post('/', (req, res) => {
    //res.send('<h1>Hello</h1>');
    res.json({type: 'POST'});
});

server.put('/', (req, res) => {
    //res.send('<h1>Hello</h1>');
    res.json({type: 'PUT'});
});

server.delete('/', (req, res) => {
    //res.send('<h1>Hello</h1>');
    res.json({type: 'DELETE'});
});

server.patch('/', (req, res) => {
    //res.send('<h1>Hello</h1>');
    res.json({type: 'PATCH'});
});

server.listen(port, () => {
    console.log(`Express Server running on http://localhost:${port}`);
});

