let express = require('express');
let app = express()
let { Router } = express;
let routeProductos = new Router;
let routeCarrito = new Router;
const productosRoute = require("./routes/Productos/index")
const carritoRoute = require("./routes/Carrito/index")
const PORT = 3000;

app.use(express.json())
app.use("/productos", routeProductos);
app.use("/carrito", routeCarrito);

productosRoute(routeProductos);
carritoRoute(routeCarrito);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})