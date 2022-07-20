
let nombre;
class producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    valor() { alert("El valor del producto seleccionado es $ " + this.precio) }
}
const producto1 = new producto(1, "Paleta Bullpadel Naranja", 35000)
const producto2 = new producto(2, "Paleta Bullpadel Azul", 65000)
const producto3 = new producto(3, "Paleta Bullpadel Negra", 135000)
const producto4 = new producto(4, "Grip Generico", 200)
const producto5 = new producto(5, "Grip Intermedio", 420)
const producto6 = new producto(6, "Grip Profesional", 900)
const producto7 = new producto(7, "Grip Profesional", 100)
const producto8 = new producto(8, "Tubo x 3 Pelotas Head", 3500)
const productos = [];
const cliente = () => {
    do {
        nombre = prompt("Hola, Gracias por visitar nuestra tienda en punto de oro, porfavor indicanos tu Nombre.");
    }
    while (nombre === "" || !isNaN(nombre))
    return nombre
}

let agregarCarrito = () => {
    let seleccionCliente = Number(prompt("Hola " + nombre + " bienvenido/a a nuestra tienda, selecciona con NUMEROS el producto que desea comprar\n\n 1- Paleta bullpadel  Naranja. \n 2- Paleta Bullpadel Azul. \n 3- Paleta Bullpadel Negra. \n 4- Grip Generico.\n 5- Grip Intermedio. \n 6- Grip Profesional.\n 7- Grip Profesional. \n 8- Tubo x 3 Pelotas Head "))
    while (seleccionCliente != "salir") {
        switch (seleccionCliente) {
            case producto1.id:
                producto1.valor()
                productos.push(producto1)
                seleccionCliente = "salir";
                break
            case producto2.id:
                producto2.valor()
                productos.push(producto2)
                seleccionCliente = "salir";
                break
            case producto3.id:
                producto3.valor()
                productos.push(producto3)
                seleccionCliente = "salir";
                break
            case producto4.id:
                producto4.valor()
                productos.push(producto4)
                seleccionCliente = "salir";
                break
            case producto5.id:
                producto5.valor()
                productos.push(producto5)
                seleccionCliente = "salir";
                break
            case producto6.id:
                producto6.valor()
                productos.push(producto6)
                seleccionCliente = "salir";
                break
            case producto7.id:
                producto7.valor()
                productos.push(producto7)
                seleccionCliente = "salir";
                break
            case producto8.id:
                producto8.valor()
                productos.push(producto8)
                seleccionCliente = "salir";
                break
            default:
                seleccionCliente = Number(prompt("por favor, ingresa nuevamente el NUMERO del producto que deseas comprar \n\n 1- Paleta bullpadel  Naranja. \n 2- Paleta Bullpadel Azul. \n 3- Paleta Bullpadel Negra. \n 4- Grip Generico.\n 5- Grip Intermedio. \n 6- Grip Profesional.\n 7- Grip Profesional. \n 8- Tubo x 3 Pelotas Head \n"));


        }
    }
    if (confirm("¿Queres agregar otro producto a la compra?")) {
        agregarCarrito();
    }
    else {
        alert("La suma de tu compra es $ " + totalcarrito())
    }
}

const totalcarrito = () => {
    let sumaCarro = 0;
    productos.forEach((producto) => {
        sumaCarro += producto.precio

    })
    return sumaCarro
}

const eliminarProducto = () => {
    productoEliminar = prompt("Si desea eliminar un productos por favor indiquelo con el numero. \n\n 1- Paleta bullpadel  Naranja. \n 2- Paleta Bullpadel Azul. \n 3- Paleta Bullpadel Negra. \n 4- Grip Generico.\n 5- Grip Intermedio. \n 6- Grip Profesional.\n 7- Grip Profesional. \n 8- Tubo x 3 Pelotas Head \n ")

    let num = 0;
    productos.forEach((producto) => {

        if (producto.id == productoEliminar) {
            productos.splice(num, 1);
            num += 1;
        } else {
            num += 1;
        }
        alert ("Su total actualizado es de $ " + totalcarrito())
    })
}

cliente();
agregarCarrito();
eliminarProducto();
