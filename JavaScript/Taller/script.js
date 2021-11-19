/**
 * Lógica para crear pedidos y cobrar los pedidos del usuario
 */

const usuario = {
    nombre: "Beto",
    edad: 30,
    deuda: 0
}

let pedido = []
let costoPedido = 0
let montoTotal = 0

//Lista todos los productos del menú en un formato amigable
const show_munu = () => {
    console.log(`CODIGO - PRODUCTO - COSTO`)
    //productos.forEach(producto => console.log(`${producto.codigo} ${producto.producto} - $${producto.costo}`))

    for(let producto of productos){
        console.log(`${producto.codigo} ${producto.producto} - $${producto.costo}`)
    }
}

const pedirProducto = cod => {
    if(!cod) return "Ingrese un codigo valido"
    const productoEncontrado = productos.find(producto => producto.codigo === cod)
    if(!productoEncontrado) return "El producto no existe"
    pedido.push(productoEncontrado)
    console.log("El producto ha sido agregado a su pedido. Su prodructo es:")
    return verPedido()
}

const verPedido = () => pedido

const calcularCosto = () => {
    let costo = 0
    for(producto of pedido){
        costo += producto.costo
    }
    costoPedido = costo
    return costoPedido
}

const finalizarPedido = () => {
    calcularCosto()
    usuario.deuda = costoPedido

    pedido = []
    costoPedido = 0

    return `${usuario.nombre}, tu debes pagar $${usuario.deuda}`
}

const pagarPedido = montoEntregado => {
    if(typeof montoEntregado === "number"){
        if(montoEntregado < usuario.deuda){
            return `No te alcanza para pagar tu pedido`
        } else if(montoEntregado === usuario.deuda){
            usuario.deuda = 0
            montoTotal += montoEntregado
            return `Tu pedido ha sido pagado`
        } else {
            montoTotal += montoEntregado
            console.log(`Tu pedido ha sido pagado y tu cambio es de ${montoEntregado - usuario.deuda}`)
            return usuario.deuda = 0
        }
    } else{
        return "Dato ingresado de forma erronea"
    }
}

const verMontoTotal = () => montoTotal