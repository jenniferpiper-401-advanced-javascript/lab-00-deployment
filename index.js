'use strict';

/**
 * Simple Server
 * @module index
 */

const pol = require('./pol.js');
const http = require('http');
const PORT = process.env.PORT || 4500;

/**
 * Basic Request Hanlder (All Routes)
 * @param req
 * @param res
 */
const requestHandler = (req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.write( pol.isAlive().toString() );
  res.end();
};

const app = http.createServer(requestHandler);
app.listen(PORT, () => console.log(`server up on port ${PORT}`) );

