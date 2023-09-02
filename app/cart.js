
const cart = document.querySelector("#cartButton");
const container = document.createElement("div");
container.className = "newCard";

function actualizarVista() {
    let dataStorage = JSON.parse(localStorage.getItem("formularios")) || [];
    let spanCount = document.querySelector("#spanCount");
    let contador = dataStorage.length;
    spanCount.innerHTML = contador;

    container.innerHTML = ''; // Limpiar el contenedor
    dataStorage.forEach(element => {
        const content = document.createElement("div");
        content.classList.add("element");
        content.innerHTML = `
            <div>
                <p>Solicitud Nro: ${element.id}</p>
                <p>Nombre : ${element.nombre}</p>
                <p>Monto: ${element.monto}</p>
                <p>Meses: ${element.meses}</p>
            </div>
            <div><span class="trash">...</span></div>
        `;
        
        container.appendChild(content);


        const deleteCard = content.querySelector(".trash");
        deleteCard.addEventListener('click', () => {
            deleteCardSolicitud(element.id);
        });
    });
}

const deleteCardSolicitud = (id) => {
    let dataStorage = JSON.parse(localStorage.getItem("formularios")) || [];
    const foundId = dataStorage.findIndex((element) => element.id === id);
    if (foundId !== -1) {
        dataStorage.splice(foundId, 1);

        // Actualizar el localStorage después de eliminar un elemento
        localStorage.setItem("formularios", JSON.stringify(dataStorage));
        
        contador = dataStorage.length;
        spanCount.innerHTML = contador;

        // Volver a mostrar los formularios actualizados
        actualizarVista();

    }
};

function openCart() {

    // Función para actualizar la vista

    actualizarVista(); // Llamar a la función para mostrar inicialmente los elementos

    cart.addEventListener("click", () => {
        if (document.body.contains(container)) {
            document.body.removeChild(container);
        } else {
            document.body.appendChild(container);
        }
    });

    // Función para eliminar un elemento y actualizar la vista
}

openCart();


