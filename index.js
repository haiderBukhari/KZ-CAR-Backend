import express from "express";
import jsonServer from "json-server";
import auth from "json-server-auth";
import cors from "cors";

const server = express();

server.use(cors());

const router = jsonServer.router('./db.json');
server.use('/api', router);
server.db = router.db

const middlewares = jsonServer.defaults()

server.use(auth)
server.use(middlewares)
server.use(router)
server.listen(8000);