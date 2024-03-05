// Bienvenida

alert("Bienvenido a Productos Gamer!");

// Variables para almacenar los datos de registro
let nombreRegistro;
let contrasenaRegistro;

// Variables para almacenar los datos de inicio
let nombreInicio;
let contrasenaInicio;

// Mostrar menú inicial
let opcion;
let gamer = false

// Menú de ingreso

while (true) {
    opcion = prompt("Escriba 1 para registrarse\nEscriba 2 para ingresar\nEscriba 3 para salir");

    if (opcion === "1") {
        // Registrar el usuario
        nombreRegistro = prompt("Ingrese su nombre:");
        contrasenaRegistro = prompt("Ingrese su contraseña:");

        // Confirmación del registro del usuario
        alert("Te has registrado correctamente. Ahora puedes iniciar sesión.");
    } else if (opcion === "2") {
        // Inicio de sesión del usuario
        nombreInicio = prompt("Ingrese su nombre:");
        contrasenaInicio = prompt("Ingrese su contraseña:");

        // Verificar si los datos del usuario coinciden con los del registro
        if (nombreRegistro === nombreInicio && contrasenaRegistro === contrasenaInicio) {
            alert("Inicio de sesión completado. ¡Bienvenido, " + nombreInicio + "!");
            gamer = true;
            break; // Salir del bucle
        } else {
            alert("Nombre de usuario o contraseña incorrectos.");
        }
    } else if (opcion === "3") {
        alert("Gracias por su visita!");
        break;
    } else {
        alert("Opción no válida. Por favor, escriba 1, 2 o 3");
    }
}

// ARRAY CON SUS OBJETOS

const productos = [

    { tipo: "Monitor ", marca: "LG ", precio: 50000 },
    { tipo: "Monitor ", marca: "Samsung ", precio: 30000 },
    { tipo: "Monitor ", marca: "TopHouse ", precio: 20000 },

    { tipo: "Mouse ", marca: "Logitech G502 HERO ", precio: 45000 },
    { tipo: "Mouse ", marca: "HyperX Pusefire ", precio: 25000 },
    { tipo: "Mouse ", marca: "Genius NX-7000 ", precio: 10000 },

    { tipo: "Teclado ", marca: "Logitech K120 ", precio: 65000 },
    { tipo: "Teclado ", marca: "ReDragon K585 ", precio: 43000 },
    { tipo: "Teclado ", marca: "Genius KM-8200 ", precio: 15000 },

];

//CARRITO

const carrito = [];

//BUSCAR PRODUCTOS

function buscarProducto() {
    let busqueda = prompt("Ingrese el producto a buscar:");
    let productosEncontrados = productos.filter((producto) => producto.tipo.toLowerCase().includes(busqueda.toLowerCase()));

    if (productosEncontrados.length > 0) {
        let productosEncontradosDos = productosEncontrados.map((producto, numero) => `${numero + 1}. ${producto.tipo} ${producto.marca} $${producto.precio}`);

        let seleccion = prompt("Ingrese el número del producto que desea agregar al carrito o presione 'S' para volver al menú:\n" + "\n" + "Productos encontrados:\n" + productosEncontradosDos.join("\n"));

        let seleccionNumero = parseInt(seleccion) - 1;

        if (!isNaN(seleccionNumero) && seleccionNumero >= 0 && seleccionNumero < productosEncontrados.length) {
            carrito.push(productosEncontrados[seleccionNumero]);
            alert("Producto agregado al carrito correctamente.");
        } else if (seleccion.toLowerCase() === 's') {
            // Volver al menú
            return;
        } else {
            alert("Selección inválida.");
        }
    } else {
        alert("No se encontraron productos");
    }
}

//MOSTRAR CARRITO

function mostrarCarrito() {
    let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

    let opcion = prompt(`Carrito de compras:\n${carrito.map((producto, index) => `${index + 1}. ${producto.tipo} ${producto.marca} - $${producto.precio}`).join("\n")}\nTotal: $${total}\n\nSeleccione una opción:\n1. Comprar productos y pagar\n2. Eliminar producto del carrito\n3. Volver`);

    switch (opcion) {
        // Comprar Productos
        case "1":
            alert(`Gracias por su compra. El total a pagar es: $${total}`);
            carrito.length = 0; // Vaciar el carrito después de la compra
            gamer = false;
            break;
        // Eliminar producto del carrito
        case "2":
            let eliminarProducto = prompt("Ingrese el número del producto que desea eliminar:");

            let eliminar = parseInt(eliminarProducto) - 1;

            if (!isNaN(eliminar) && eliminar >= 0 && eliminar < carrito.length) {
                carrito.splice(eliminar, 1);
                alert("Producto eliminado del carrito correctamente.");
            } else {
                alert("Selección inválida.");
            }
            break;
        // Volver al Menú Principal
        case "3":
            break;
        // Cuando se ingresa algo incorrecto
        default:
            alert("Opción inválida.");
            break;
    }
}
//PAGINA PRINCIPAL

while (gamer) {

    let opciones = prompt("Seleccione una opción:\n 1. Mostrar catálogo\n 2. Buscar producto\n 3. Carrito\n 4. Salir");

    switch (opciones) {
        //Productos
        case "1":
            let productosgenerales = productos.map((producto) => `${producto.tipo} ${producto.marca} $${producto.precio}`)
            alert("Productos disponibles: \n" + productosgenerales.join("\n"));
            break;
        //Buscar Producto
        case "2":
            buscarProducto();
            break;
        //Mostrar Carrito
        case "3":
            mostrarCarrito();
            break;
        //Salir del Menú
        case "4":
            alert("Hasta la proxima! Vuelva pronto!");
            gamer = false;
            break;
        //Cuando se ingresa algo incorrecto
        default:
            alert("Ingreso Incorrecto");
            break;
    }

}

