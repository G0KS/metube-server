const jsonServer = require("json-server");

const server = jsonServer.create();

const middleware = jsonServer.defaults();

const router = jsonServer.router("db.json");

const PORT = process.env.PORT || 4000;

server.use(middleware);
server.use(router);

server.listen(PORT, () => {
   console.log(`Server running at port: ${PORT}`);
});
