const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cros = require("cors");
server.use(cros());
server.use(middlewares);
server.use(router);
server.listen(8000, () => {
  console.log("JSON Server is running");
});
//final
