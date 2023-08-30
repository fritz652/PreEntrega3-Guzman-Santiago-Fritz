let dataStorage = JSON.parse(localStorage.getItem("formularios"));  // esto es como si fuera una cartera de neuvos clientes
console.log(dataStorage);

function openCart() {
    const cart = document.querySelector("#cartButton");
    const container = document.createElement("div"); // Crear un contenedor para los elementos
    container.className = "newCard";

    dataStorage.forEach(element => {
        const content = document.createElement("div"); // Crear un elemento para cada elemento en dataStorage
        content.classList.add("element");
        content.innerHTML = `
            <div> Persona : ${element.nombre}</div>
        `;

        container.appendChild(content); // Agregar el elemento actual al contenedor
    });

    cart.addEventListener("click", () => {
        // Toggle para mostrar u ocultar el contenido
        if (document.body.contains(container)) {
            document.body.removeChild(container);
        } else {
            document.body.appendChild(container);
        }
    });
}

openCart();
