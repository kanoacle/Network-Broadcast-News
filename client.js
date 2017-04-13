/*jshint esversion:6 */
const net = require('net');
const client = net.connect({port: 6969}, () => {
  client.write(`connected`);
  process.stdin.on('data', (chunk) => {
    client.write(`${chunk.toString()}`);
  });
  client.on('data', (data) => {
    console.log(data.toString());
  });
});