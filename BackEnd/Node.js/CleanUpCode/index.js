const http = require("http");
const port = 4000;
const fs = require("fs");

function Handler(req, res) {
  fs.readFile("./index.html", function (err, data) {
    if (err) {
      console.log("error in searching file");
      return;
    }
    return res.end(data);
  });
}

const server = http.createServer(Handler);

server.listen(port, function (err) {
  if (err) {
    console.log("error in creating srever");
    return;
  }
  console.log("server is running on port:-", port);
});
