const express = require("express");
const app = express();
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//DB config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Use Routes

app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`Sever running on ` + port);
