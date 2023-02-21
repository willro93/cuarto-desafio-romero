const express = require("express");
const handlebars = require("express-handlebars");
const __dirname = require("./utils");
const { Server } = require("socket.io");
const productsRouter = require("./router/products.router.js");
const cartsRouter = require("./router/carts.router.js");

const app = express();

//NOTE - middleware para recibir json
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
//NOTE - middleware para handlebars
app.engine("handlebars", handlebars.engine()); //NOTE - iniciando el motor de plantillas
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.listen(8080, () => console.log("server up!"));
app.use("/api/products", productsRouter);

app.use("/api/carts", cartsRouter);
