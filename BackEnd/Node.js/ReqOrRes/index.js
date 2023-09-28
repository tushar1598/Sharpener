const http = require("http");
const port = 4000;

function Handler(req, res) {
  console.log(req.url);
  if (req.url == "/") {
    console.log("Welcome home");
    res.end("<h1>Welcome home</h1>");
  } else if (req.url == "/about") {
    console.log("Welcome to About Us page");
    res.end("<h1>Welcome to About Us page</h1>");
  } else if (req.url == "/node") {
    console.log("Welcome to my Node Js project");
    res.end("<h1>Welcome to my Node Js project</h1>");
  }
}

const server = http.createServer(Handler);

server.listen(port, function (err) {
  if (err) {
    console.log("error in creating my server");
    return;
  }

  console.log("Welcome to my Node Js project");
});
