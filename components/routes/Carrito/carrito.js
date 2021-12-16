const fs = require("fs")

class Carrito {
    constructor(url) {
        this.url = url;
        this.contadorCarrito = 0,
            this.contadorProductos = 0,
            this.date = new Date()
    }
    async newCarrito(res) {
        try {
            this.contadorCarrito++;
            contenedorCarrito.push({
                name: `carrito${this.contadorCarrito}`,
                id: this.contadorCarrito,
                date: this.date.toLocaleString("en-US"),
                productos: []
            })
            let contenedor = JSON.stringify(contenedorCarrito)
            fs.promises.writeFile(this.url, contenedor)
            res.send(contenedorCarrito)
        } catch (error) {
            throw new Error(error)
        }
    } async deleteCarrito(id) {
        try {
            let data = await fs.promises.readFile(this.url, 'utf-8')
            data = JSON.parse(data)
            let deleteItem = data.filter(item => item.id !== parseFloat(id))
            contenedorCarrito = deleteItem
            deleteItem = JSON.stringify(deleteItem);
            return fs.promises.writeFile(this.url, deleteItem);
        } catch (error) {
            throw new Error(error)
        }
    } async getById(id, res) {
        try {
            let data = await fs.promises.readFile(this.url, 'utf-8')
            data = JSON.parse(data)
            let getItem = data.filter(item => item.id === parseFloat(id))
            if (getItem.length >= 1) {
                return res.send(getItem)
            } else {
                return res.send({ error: "Producto no encontrado" })
            }
        } catch (error) {
            throw new Error(error)
        }
    } async addCarrito(id, producto) {
        try {
            this.contadorProductos++;
            let data = await fs.promises.readFile(this.url, "utf-8")
            data = JSON.parse(data)
            let findItem = data.find(item => item.id === parseFloat(id))
            if (findItem) {
                findItem.productos.push({
                    ...producto,
                    id: this.contadorProductos
                })
                data = JSON.stringify(data)
                fs.promises.writeFile(this.url, data)
            }
        } catch (error) {
            throw new Error(error)
        }
    } async deleteProducto(id, id_prod) {
        try {
            let data = await fs.promises.readFile(this.url, "utf-8")
            data = JSON.parse(data)
            let findItem = data.find(item => item.id === parseFloat(id))
            if (findItem) {
                let findProducto = findItem.productos.filter(item => item.id !== parseFloat(id_prod))
                findItem.productos = findProducto;
                data = JSON.stringify(data);
                return fs.promises.writeFile(this.url, data)
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = contenedorCarrito = []
module.exports = Carrito