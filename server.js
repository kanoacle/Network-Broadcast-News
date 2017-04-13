/*jshint esversion: 6*/
const net = require(`net`);
const connects = [];
const server = net.createServer((connection) => {
  connects.push(connection);
  connection.on(`data`, (data) => {
    console.log(data.toString());
    for (var i = 0; i < connects.length; i++) {
      if (connects[i] !== connection) {
        connects[i].write(`User ${connects.indexOf(connection) + 1}: ${data.toString()}`);
      }
  }
  });
  connection.on(`end`, () => {
    console.log(`Connection closed, goodbye.`);
  });
});
server.listen(6969, () => {
});