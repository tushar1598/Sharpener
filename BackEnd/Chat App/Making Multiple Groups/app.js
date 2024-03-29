const express = require("express");
const app = express();
const port = 9000;
const http = require("http").createServer(app);
const bodyParser = require("body-parser");
const sequelize = require("./config/databse");
const User = require("./models/user");
const Message = require("./models/message");
const localStrategy = require("./config/passport-local-strategy");
const passport = require("passport");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

app.use(express.static("assets"));

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.set("views", "./views");

const sessionStore = new MySQLStore({
  host: process.env.DB_Host,
  user: process.env.DB_User,
  password: process.env.DB_Password,
  database: process.env.DB,
});

app.use(
  session({
    name: process.env.Project_Name,
    secret: process.env.Project_Secret,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 100 * 60,
    },
    store: sessionStore,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use("/", require("./routes"));

User.hasMany(Message);
Message.belongsTo(User)

sequelize
  .sync()
  .then(() => {
    http.listen(port, function () {
      console.log(`server is running on port ${port} successfully!!`);
    });
  })
  .catch((err) => console.log(err));


const io = require("socket.io")(http);
io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    socket.broadcast.emit("message", msg)
    console.log(msg)
    Message.create({ message: msg.message, userId: msg.id, username: msg.username }, (err, message) => {
      console.log(message)
    })
  })
})

