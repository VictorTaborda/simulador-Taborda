class crearProducto {
    constructor(id, nombre, precio, descripcion, img, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
        this.cantidad = Number(cantidad)
    }
}

const producto1 = new crearProducto(1, "PALA BULLPADEL HACK JR 22", 36000, "Pala Hack 02 JR es la pala oficial de Paquito Navarro paraa jugadores junior.", `./img/producto0.jpg`, 1)
const producto2 = new crearProducto(2, "PALA BULLPADEL K3 AVANT 21", 65000, "Pala K3 Avant máximo control y alto rendimiento.  para jugadores avanzados.", `./img/producto1.jpg`, 1)
const producto3 = new crearProducto(3, "PALA BULLPADEL ELITE W", 135000, "La  pala ELITE de Bullpadel es la pala elegida por la jugadora Gemma Triay.", `./img/producto2.jpg`, 1)
const producto4 = new crearProducto(4, "GRIPS Bullpadel GR-1210", 200, "Grips de reemplazo de máxima durabilidad.Blanco y Negro", `./img/producto3.jpg`, 1)
const producto5 = new crearProducto(5, "GRIP Bullpadel  WEIGHT", 420, "Pack de 2 unidades de pesos para añadir al mango de la pala.", `./img/producto4.jpg`, 1)
const producto6 = new crearProducto(6, "OVERGRIPS Bullpadel GB-1202", 900, "Sistema FixoGrip ofrece seguridad, agarre y confort óptimos", `./img/producto5.jpg`, 1)
const producto7 = new crearProducto(7, "PELOTAS Bullpadel GOLD", 600, "Pack de 3 pelotas de gran velocidad, calidad y durabilidad.", `./img/producto6.jpg`, 1)
const producto8 = new crearProducto(8, "PELOTAS Bullpadel NEXT PRO", 900, "Pack de pelotas NEXT PRO para competiciones y torneos.", `./img/producto7.jpg`, 1)
const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];
const contenedorCarrito = document.getElementById("carrito-contenedor");
const contenedorProductos = document.getElementById("container_productos")
const precioTotal = document.getElementById("precioTotal")
const botonEliminarCompra= document.getElementById("eliminar-carrito")
const contadorCompra=document.getElementById("contador")
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
let carrito = []
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
botonEliminarCompra.addEventListener('click',()=>{
    carrito.length=0;
    actualizarCarrito()
})




productos.forEach((producto) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card m-4" style="width: 20rem;">
    <img style="max-width:19rem" src="${producto.img}" class="card-img-top" alt="error">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.descripcion}</p>
    <h1>$${producto.precio}<h1>
    <a class="btn btn-primary " id=${producto.id}>Comprar</a>
    </div>
</div>`
contenedorProductos.appendChild(div);
const botonComprar = document.getElementById(`${producto.id}`)
botonComprar.addEventListener('click', () => {
            agregarAlCarrito(producto.id)

        
    })
})

const agregarAlCarrito = (prodId) => {
    const existe =carrito.some(producto=>producto.id ===prodId)

    if(existe){
        const producto = carrito.map(producto=>{
            if (producto.id ===prodId){
                producto.cantidad++
            }
        })
    }else{

    const item = productos.find((producto)=> producto.id == prodId);
    carrito.push(item);

    
}
actualizarCarrito()
}
const eliminarDelCarrito = (productoId) => {
    const item = carrito.find((producto) => producto.id === productoId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((producto) => {
        const div = document.createElement('div')
       /*  VER CLASES */
        div.innerHTML = `
                <td scope="row">${producto.cantidad}</td>
                <td>${producto.nombre}</td>
                <td scope="row">${producto.id}</td>
                <td><strong>$ ${producto.precio}</strong></td>
                <button onclick="eliminarDelCarrito(${producto.id})" ><img src="./img/eliminar.JPG" style="max-height: 23px" alt=""></button>`
        contenedorCarrito.appendChild(div)


        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCompra.innerText= carrito.length
    precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0)
}


botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) => {
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
})
























