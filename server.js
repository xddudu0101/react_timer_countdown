const express = require('express');

express()
  .use(express.static(__dirname + '/build'))
  .get('*', (req, res) => res.sendFile(__dirname + '/build/index.html'))
  .listen(8080);