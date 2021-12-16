const Contenedor = require('./productos');
let contenedor = new Contenedor("./components/utils/productos.txt")


module.exports = (app) => {
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
        let date = new Date()
        let producto = {
            nombre: req.query.nombre,
            codigo: req.query.codigo,
            url: req.query.url,
            precio: req.query.precio,
            cantidad: req.query.cantidad,
            descripcion: req.query.descripcion,
            tiempo: date.toLocaleString("en-US")
        }
        contenedor.save(producto)
        res.json(producto)
    })

}