// todo.. add types to this?

import http = require('http');
import express = require('express');
import path = require('path');

const port : string | number = process.env.port || 1337;
const privateKey = `1234-abcd`; // We must ensure that the compiled version of this file is never sent to the end user.

const app = new express();

//app.use(express.static('build'))
//app.use('/', express.static('index.html'))


// this is a cool way to serve a js file but is kind of silly
/*app.use('/x4v8', (req, res) => {

    res.sendFile(path.join(__dirname, 'main.js'));

});

app.use('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));

})*/

app.use(express.static("public"));

app.get("/main.js", (req, res) => {

    res.sendFile(path.resolve(__dirname, "main.js"));

})

app.listen(port);
console.info(`App listening on port ${port}!`);