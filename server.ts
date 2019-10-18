import http = require('http');
import express = require('express');
import path = require('path');

var port = process.env.port || 1337
/*http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end('Hello World\n');
    // res.end?
    // pretty ad hoc way of doing a server...
    // but... sufficient...
    res.write('<h1>Friendly Application</h1>');
    res.write('<script src=main.js></script>');
    res.end();
    //res.status(200).send(``)
}).listen(port);*/

const app = new express();

//app.use(express.static('build'))
//app.use('/', express.static('index.html'))


// this is a cool way to serve a js file but is kind of silly
app.use('/x4v8', (req, res) => {

    res.sendFile(path.join(__dirname, 'main.js'));

});

app.use('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));

})




//app.get('/', (req, res) => {
//    res.send("Hiya!");
//})

app.listen(port);