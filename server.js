/*jshint esversion: 6*/
const net = require(`net`);
const connects = [];
const server = net.createServer((connection) => {
  connects.push(connection);
  for (let i = 0; i < connects.length; i++) {
    if (connects[i] === connection) {
      connection.write(`You are user ${connects.indexOf(connection) + 1}`);
    }
  }
  connection.on(`data`, (data) => {
    console.log(data.toString());
    for (let i = 0; i < connects.length; i++) {
      if (connects[i] !== connection) {
        connects[i].write(`\nUser ${connects.indexOf(connection) + 1}: ${data.toString()}`);
      }
  }
  });
  connection.on('end', () => {
    for (let y = 0; y < connects.length; y++) {
      if (connects[y] !== connection) {
        connects[y].write(`\nUser ${connects.indexOf(connection) + 1} has left the chat.`);
      }
    }
  });
  process.stdin.on('data', (chunk) => {
    connection.write(`\nAdmin: ${chunk.toString()}`);
  });
});
server.listen(6969, () => {
});