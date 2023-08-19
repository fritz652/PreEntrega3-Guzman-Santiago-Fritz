// Función para filtrar y mostrar los clientes según la búsqueda

function filtrarClientes(busqueda) {
    const resultados = cartera.filter(persona => {
        return (
            persona.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            persona.distrito.toLowerCase().includes(busqueda.toLowerCase()) ||
            persona.negocio.toLowerCase().includes(busqueda.toLowerCase())
        );
    });

    contenedorClienteID.innerHTML = ""; // Limpiar el contenedor antes de mostrar los resultados

    resultados.forEach(persona => {
        const div = document.createElement("div");
        div.classList.add("persona");
        div.innerHTML = `
            <div class="personaIten picPerson">
                <img class="clienteImagen" src=${persona.personImg} alt="">
                <p>ID: ${persona.id}</p>
            </div>
            <div class="personaIten">
                <h3>Cliente: ${persona.nombre}</h3>
                <p>Distrito: ${persona.distrito}</p>
                <p>Negocio :${persona.negocio}</p>
                <p>TEA :${persona.TEA}</p>
                <span>Monto: ${persona.monto}</span><br/>
                <p>meses: ${persona.meses}</p>
                <button Class="verCliente">Ver</button>
            </div>
        `;
        contenedorClienteID.append(div);
    });
}

// Evento de cambio en el campo de búsqueda
const inputSearch = document.querySelector("#inputSearch");

inputSearch.addEventListener("keyup", function(event) {
    const busqueda = event.target.value;
    filtrarClientes(busqueda);
});