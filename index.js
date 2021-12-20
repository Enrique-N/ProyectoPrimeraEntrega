let express = require('express');
let app = express()
const productosRoute = require("./routes/Productos/index")
const carritoRoute = require("./routes/Carrito/index")
const PORT = 3000;

productosRoute(app)
carritoRoute(app)



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})