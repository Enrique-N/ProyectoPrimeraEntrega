const Contenedor = require('./productos');
let contenedor = new Contenedor("./utils/productos.txt")
let express = require('express');
let routeProductos = express.Router()

routeProductos.get("/:id", (req, res) => {
    let { id } = req.params;
    contenedor.getById(id, res)
})

routeProductos.get("/", (req, res) => {
    contenedor.getAll(res)
})

routeProductos.put("/:id/:ele/:item", (req, res) => {
    let { id } = req.params
    let { ele } = req.params
    let { item } = req.params
    contenedor.updateItem(id, ele, item)
    res.send(`${ele} modificado a ${item}`)
})

routeProductos.delete("/:id", (req, res) => {
    let { id } = req.params
    contenedor.deleteById(id)
    res.send(data)
})

routeProductos.post("/", (req, res) => {
    let date = new Date()
    let producto = {
        ...req.body,
        tiempo: date.toLocaleString("en-US")
    }
    contenedor.save(producto)
    res.json(producto)
})

module.exports = routeProductos;
