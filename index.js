// json server
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// port
const port = process.env.PORT || 4000;

// create server
server.use('/api', router)
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running at ${port} 🎉`);
});
