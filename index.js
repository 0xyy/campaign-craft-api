const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "PATCH", "PUT", "DELETE", "OPTIONS"],
  })
);
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
