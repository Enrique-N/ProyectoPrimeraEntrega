let express = require('express');
let app = express()
let { Router } = express;
let routeProductos = new Router;
let routeCarrito = new Router;
const productosRoute = require("./routes/Productos/index")
const carritoRoute = require("./routes/Carrito/index")
const PORT = 3000;

productosRoute(routeProductos);
carritoRoute(routeCarrito);

app.use("/productos", routeProductos);
app.use("/carrito", routeCarrito);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})