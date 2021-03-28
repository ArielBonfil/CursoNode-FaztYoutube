/* const http = require("http");
const handleServer = function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write("<h1>Hola mundo</h1>");
  res.end();
};
const server = http.createServer(handleServer);
server.listen(3000, function () {
  console.log("servidor en el puerto 3000".green);
});
 */
const colors = require("colors");

const express = require("express");
const server = express();
server.get("/", (req, res) => {
  res.send("<h1>Hola capo con express y nodejs</h1>");
});
server.listen(3000, (req, res) => {
  console.log("Server on port 3000".green);
});
