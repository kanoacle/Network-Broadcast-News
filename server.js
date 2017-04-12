/*jshint esversion: 6*/
const net = require('net');

const server = net.createServer((connection) => {
  connection.on('data', (data) => {
    connection.write("Start chatting!");
  });
});