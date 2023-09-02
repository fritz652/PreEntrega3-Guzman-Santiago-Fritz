let dataStorage = JSON.parse(localStorage.getItem("formularios"));

function openCart() {
    const cart = document.querySelector("#cartButton");
    const container = document.createElement("div");
    container.className = "newCard";

    // Función para actualizar la vista
    function actualizarVista() {
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
            content.style.display = `flex`;
            content.style.margin = `30px`;            

            container.appendChild(content);

            const deleteCard = content.querySelector(".trash");
            deleteCard.addEventListener('click', () => {
                deleteCardSolicitud(element.id);
            });
        });
    }

    actualizarVista(); // Llamar a la función para mostrar inicialmente los elementos

    cart.addEventListener("click", () => {
        if (document.body.contains(container)) {
            document.body.removeChild(container);
        } else {
            document.body.appendChild(container);
        }
    });

    // Función para eliminar un elemento y actualizar la vista
    const deleteCardSolicitud = (id) => {
        const foundId = dataStorage.findIndex((element) => element.id === id);
        if (foundId !== -1) {
            dataStorage.splice(foundId, 1);

            // Actualizar el localStorage después de eliminar un elemento
            localStorage.setItem("formularios", JSON.stringify(dataStorage));

            // Volver a mostrar los formularios actualizados
            actualizarVista();

        }
    };
}

openCart();


