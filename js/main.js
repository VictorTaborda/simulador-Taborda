class producto {
    constructor(id, nombre, precio, descripcion, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
    }
}

const producto1 = new producto(1, "PALA BULLPADEL HACK JR 22", 36000, "La nueva Pala Hack 02 JR es la pala oficial de Paquito Navarro adaptada a jugadores junior.", `./img/producto0.jpg`)
const producto2 = new producto(2, "PALA BULLPADEL K3 AVANT 21", 65000, "Pala Bullpadel K3 Avant colec. 2021 , máximo control y alto rendimiento.  para jugadores avanzados.", `./img/producto1.jpg`)
const producto3 = new producto(3, "PALA BULLPADEL ELITE W", 135000, "La nueva pala ELITE de Bullpadel es la pala elegida por nuestra jugadora Gemma Triay.", `./img/producto2.jpg`)
const producto4 = new producto(4, "GRIPS Bullpadel GR-1210", 200, "Grips de reemplazo de máxima durabilidad.Blanco y Negro", `./img/producto3.jpg`)
const producto5 = new producto(5, "GRIP Bullpadel CUSTOM WEIGHT", 420, "Pack de 2 unidades de pesos para añadir al mango de la pala.", `./img/producto4.jpg`)
const producto6 = new producto(6, "OVERGRIPS Bullpadel GB-1202", 900, "Sistema FixoGrip ofrece seguridad, agarre y confort óptimos", `./img/producto5.jpg`)
const producto7 = new producto(7, "PELOTAS Bullpadel GOLD", 600, "Pack de 3 pelotas de gran velocidad, calidad y durabilidad.", `./img/producto6.jpg`)
const producto8 = new producto(8, "PELOTAS Bullpadel BP FIP NEXT PRO", 900, "Pack de pelotas NEXT PRO para competiciones y torneos.", `./img/producto7.jpg`)


let cardsPaletas = [producto1, producto2, producto3];
let cardsGrips = [producto4, producto5, producto6];
let cardsPelotas = [producto7, producto8]
let cardsContainer = [cardsPaletas, cardsGrips, cardsPelotas];

const cardPala = document.querySelector(".container_pala");
const cardGrip = document.querySelector(".cointeiner_grip");
const cardPelota = document.querySelector(".cointeiner_bolas");
const containers = [cardPala, cardGrip, cardPelota];
for (i = 0; i < cardsContainer.length; i++) {

    let htmlCode = "";
    for (cards in cardsContainer[i]) {
        let card = cardsContainer[i][cards];
        let img = card["img"];
        let nombre = card["nombre"];
        let descripcion = card["descripcion"];
        let precio = card["precio"];
        let id = card["id"];
        htmlCode += `
        <div class="card m-4" style="width: 15rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${descripcion}</p>
        <h1>$${precio}<h1>
        <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    </div>`;
    };

    containers[i].innerHTML = htmlCode;
}

