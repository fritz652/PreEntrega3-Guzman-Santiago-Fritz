//declarando variables:

const inputSearchID = document.querySelector("#inputSearchID");

/* :::::::::::::::::::::::::buscador en reconstrucción::::::::::::::::::::::::::::::::::*/

function filtrarPorDistrito() {
    do {
        let palabraClave = prompt("Ingresa el distrito para buscar por distrito").toLowerCase();
        palabraClave = palabraClave.toLowerCase(); // Convertir a minúsculas

        let resultado = cartera.filter((per) => (per.distrito.toLowerCase().includes(palabraClave)) || per.nombre.toLowerCase().includes(palabraClave) || per.negocio.toLowerCase().includes(palabraClave));

        if (resultado.length > 0) {
            console.log(resultado);
            alert(`Cliente encontrado en el distrito ${palabraClave}. Revisar la consola para más detalles.`);
        } else {
            alert(`Distrito no encontrado: ${palabraClave}`);
        }

        var respuesta = prompt("¿Deseas hacer otra búsqueda? (Si/No)").toUpperCase();
    } while (respuesta === "SI");
}

//filtrarPorDistrito();
