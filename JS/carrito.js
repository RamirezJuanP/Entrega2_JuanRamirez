class Productos{
    constructor(nombre, precio, codigo){
        this.nombre = nombre;
        this.precio = precio;
        this.codigo = codigo;
    }
}

const TRADICIONAL_1 = new Productos ("TORTA DE CHOCOLATE", 29000, 101);
const TRADICIONAL_2 = new Productos ("TORTA DE FRUTOS ROJOS", 29000, 102);
const TRADICIONAL_3 = new Productos ("PASTEL RED LABEL", 29000, 103);
const TRADICIONAL_4 = new Productos ("PASTEL DELICIOUS RED", 29000, 104);

const REFRIJERADAS_1 = new Productos ("PASTEL DE BELEM", 34900, 201);
const REFRIJERADAS_2 = new Productos ("PASTEL DE ALFAJOR", 34900, 202);
const REFRIJERADAS_3 = new Productos ("TARTA DE CHOCOLATE", 34900, 203);
const REFRIJERADAS_4 = new Productos ("TORTA DE CEREZA", 34900, 204);

const POSTRES_1 = new Productos ("FLAN DE CHOCOLATE", 42900, 301);
const POSTRES_2 = new Productos ("CUPCAKES", 24900, 302);
const POSTRES_3 = new Productos ("POSTRE DE FRUTAS", 39900, 303);
const POSTRES_4 = new Productos ("POSTRE RASPBERRY DESSERT", 29900, 304);


const CATALOGO_TRADICIONAL = [TRADICIONAL_1, TRADICIONAL_2, TRADICIONAL_3, TRADICIONAL_4];
const CATALOGO_REFRIJERADAS = [REFRIJERADAS_1, REFRIJERADAS_2, REFRIJERADAS_3, REFRIJERADAS_4];
const CATALOGO_POSTRES = [POSTRES_1, POSTRES_2, POSTRES_3, POSTRES_4];
const CATALOGO_GENERAL = CATALOGO_TRADICIONAL.concat(CATALOGO_REFRIJERADAS, CATALOGO_POSTRES);


const nombreBuscado = prompt("ingresa el nombre de la torta").toUpperCase();
let productoEncontrado;

for (const key in CATALOGO_GENERAL) {
    if (CATALOGO_GENERAL.hasOwnProperty(key)) {
        const producto = CATALOGO_GENERAL[key];
        if (producto.nombre === nombreBuscado) {
            productoEncontrado = producto;
            break;
        }
    }
}

if (productoEncontrado) {
    console.log(`El precio de ${productoEncontrado.nombre} es: ${productoEncontrado.precio}`);
} else {
    alert("Ingrese un nombre correcto.");
}