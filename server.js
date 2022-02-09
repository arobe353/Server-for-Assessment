const express = require("express");
const nunjucks = require("nunjucks");
const server = express();
const port = 3000;

server.engine("html", nunjucks.render);
server.set("view engine", "html");
server.use(express.static("public"));

const sqlite3 = require("sqlite3");

nunjucks.configure("views", {
  autoescape: true,
  express: server,
});

server.get("/user/", (request, response) => {
  response.render("index");
});

server.listen(port, () => {
  console.log(
    `Your local server is waiting for requests at 127.0.0.1:${port} or at localhost:${port}`
  );
});
