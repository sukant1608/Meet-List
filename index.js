require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const handle = require("./handlers");
const db = require("./models");
const routes = require("./routes");

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log(`Server started at port ${port}`);
});

app.get("/", (req, res) => {
  res.json({
    hello: "World",
  });
});

app.use("/api/auth", routes.auth);
app.use("/api/task", routes.task);

app.use(handle.notFound);
app.use(handle.errors);
