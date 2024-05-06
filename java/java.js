let opcion;
let carrito = [];
let catalogo = [
    { nombre: "Remera", precio: 20, categoria: "remeras" },
    { nombre: "Pantalón", precio: 30, categoria: "pantalones" },
    { nombre: "Zapatillas", precio: 50, categoria: "zapatillas" }
];

do {
    let input = prompt("Bienvenido a nuestro ecommerce de ropa.\nIngrese la opción:\n1. Ver catálogo\n2. Comprar producto\n0. Salir");

    if (input !== null && input !== "") {
        opcion = parseInt(input);

        if (!isNaN(opcion)) {
            if (opcion === 1) {
                mostrarCatalogo();
            } else if (opcion === 2) {
                comprarProducto();
            } else if (opcion === 0) {
                alert("Gracias por visitar nuestro ecommerce. ¡Hasta luego!");
            } else {
                alert("Opción no válida. Por favor, ingrese una opción válida.");
            }
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    } else {
        alert("Operación cancelada. ¡Hasta luego!");
        opcion = 0; // Establecer opción a 0 para salir del bucle
    }
} while (opcion !== 0);

console.log("Productos en el carrito:");
console.log(carrito);

function mostrarCatalogo() {
    let categoria = prompt("Ingrese la categoría que desea ver:\n1. Remeras\n2. Pantalones\n3. Zapatillas");

    if (categoria !== null && categoria !== "") {
        let categoriaSeleccionada = parseInt(categoria);

        if (!isNaN(categoriaSeleccionada) && categoriaSeleccionada >= 1 && categoriaSeleccionada <= 3) {
            let productosFiltrados = catalogo.filter(producto => {
                if (categoriaSeleccionada === 1) {
                    return producto.categoria === "remeras";
                } else if (categoriaSeleccionada === 2) {
                    return producto.categoria === "pantalones";
                } else if (categoriaSeleccionada === 3) {
                    return producto.categoria === "zapatillas";
                }
            });

            if (productosFiltrados.length > 0) {
                console.log("Productos disponibles:");
                productosFiltrados.forEach(producto => {
                    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
                });
            } else {
                console.log("No hay productos disponibles en esta categoría.");
            }
        } else {
            console.log("Opción no válida. Por favor, ingrese una opción válida.");
        }
    } else {
        console.log("Operación cancelada.");
    }
}

function comprarProducto() {
    let producto = prompt("Ingrese el número del producto que desea comprar:");
    
    if (producto !== null && producto !== "") {
        let productoSeleccionado = parseInt(producto);

        if (!isNaN(productoSeleccionado) && productoSeleccionado >= 1 && productoSeleccionado <= catalogo.length) {
            let productoAComprar = catalogo[productoSeleccionado - 1];
            alert(`Usted ha elegido comprar ${productoAComprar.nombre}.`);
            carrito.push(productoAComprar);
        } else {
            alert("Número de producto no válido. Por favor, ingrese un número válido.");
        }
    } else {
        alert("Operación cancelada.");
    }
}
