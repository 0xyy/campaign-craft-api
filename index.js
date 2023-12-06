const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// server.use(
//   cors({
//     origin: [
//       "https://sparkling-cascaron-d83dda.netlify.app",
//       "https://main--sparkling-cascaron-d83dda.netlify.app/",
//       "http://localhost:4200",
//       "https://main--sparkling-cascaron-d83dda.netlify.app",
//     ],
//   })
// );
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
