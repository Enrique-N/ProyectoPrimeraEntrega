const Contenedor = require('./productos');
let contenedor = new Contenedor("./utils/productos.txt")


module.exports = (routeProductos) => {
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