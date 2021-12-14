let express = require('express');
let app = express()
const Contenedor = require('./productos');
let contenedor = new Contenedor("./productos.txt")
const PORT = 3000;


app.get("/productos/:id", (req, res) => {
    let { id } = req.params;
    contenedor.getById(id, res)
})

app.get("/productos", (req, res) => {
    contenedor.getAll(res)
})

app.put("/productos/:id/:ele/:item", (req, res) => {
    let { id } = req.params
    let { ele } = req.params
    let { item } = req.params
    contenedor.updateItem(id, ele, item)
    res.send(`${ele} modificado a ${item}`)
})

app.delete("/productos/:id", (req, res) => {
    let { id } = req.params
    contenedor.deleteById(id)
    res.send(data)
})

app.post("/productos", (req, res) => {
    let producto = {
        nombre: req.query.nombre,
        codigo: req.query.codigo,
        url: req.query.url,
        precio: req.query.precio,
        cantidad: req.query.cantidad,
        descripcion: req.query.descripcion
    }
    contenedor.save(producto)
    res.json(producto)
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})