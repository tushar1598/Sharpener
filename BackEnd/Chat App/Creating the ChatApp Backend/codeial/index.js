const express = require("express");
const app = express();
const port = 9000;
const http = require("http").createServer(app);
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const Message = require("./models/message");

require("dotenv").config();

// for static files:-
app.use(express.static("assets"));

// for post requests:-
app.use(bodyParser.json());

// for template engine:-
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.set("views", "./views");

// for routing:-
app.use("/", require("./routes"));

sequelize
  .sync()
  .then(() => {
    http.listen(port, () => {
      console.log(`server is running successfully on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

// Socket
const io = require("socket.io")(http);
io.on("connection", (socket) => {
  console.log("Connected...");
  socket.on("message", (msg) => {
    socket.broadcast.emit("message", msg);
    Message.create(
      {
        text: msg.message,
        user: msg.user,
      },
      (err, message) => {
        console.log(message);
      }
    );
  });
});
