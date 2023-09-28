const http = require("http");
const port = 4000;

function Handler(req, res) {
  res.end("<h1> My Name is Tushar</h1>");
}

const server = http.createServer(Handler);

server.listen(port, function (err) {
  if (err) {
    console.log("error in creating server!!");
    return;
  }
  console.log(
    `My Name is Tushar and My Server is running on port ${port} successfully!!`
  );
});
