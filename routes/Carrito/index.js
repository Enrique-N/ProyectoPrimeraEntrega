const Carrito = require("./carrito")
let carrito = new Carrito("./utils/carrito.txt")

module.exports = (routeCarrito) => {

    routeCarrito.post("/", (req, res) => {
        carrito.newCarrito(res)
    })

    routeCarrito.delete("/:id", (req, res) => {
        let { id } = req.params;
        carrito.deleteCarrito(id)
        res.send(`Se elimino el carrito${id}`)
    })

    routeCarrito.get("/:id/productos", (req, res) => {
        let { id } = req.params
        carrito.getById(id, res)
    })

    routeCarrito.post("/:id/productos", (req, res) => {
        let { id } = req.params
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
        carrito.addCarrito(id, producto)
    })

    routeCarrito.delete("/:id/productos/:id_prod", (req, res) => {
        let { id } = req.params
        let { id_prod } = req.params
        carrito.deleteProducto(id, id_prod)
        res.send(`Se elimino el producto del carrito${id} con el id:${id_prod}`)
    })
}