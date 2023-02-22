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

//NOTE - ruta handlebars
app.get("/", (req, res) => {
  res.render();
});
app.get("/realtimeproducts", (req, res) => {
  res.render("realtimeProducts", {
    title: "lista de Productos",
    producto1: "Shampoo Sólido de Romero",
    producto2: "Acondicionador Sólido de Canéla",
    producto3: "Shampoo Sólido de Linaza",
    producto4: "Shampoo Sólido de Carbón",
    producto5: "Shampoo Sólido de Café",
    producto6: "Shampoo Sólido de Cola de caballo",
    producto7: "Shampoo Sólido de Avena",
    producto8: "Acondicionador Sólido de Coco",
    producto9: "Shampoo Sólido de Chocolate",
    producto10: "Shampoo Sólido de Pétalos de rosa",
  });
});
